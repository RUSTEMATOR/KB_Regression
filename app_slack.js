import pkg from '@slack/bolt';
const { App } = pkg;
import * as dotenv from "dotenv";

dotenv.config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
})

app.command('/regression', async ({command, ack, respond, client, body}) => {
    await ack();
    try {
        // Send initial message using client.chat.postMessage instead of respond
        const messageResult = await client.chat.postMessage({
            channel: body.channel_id,
            text: 'Lemme cook! 🍳'
        });
        
        console.log('Slack message result:', JSON.stringify(messageResult, null, 2));

        // Extract ts and channel from the message result
        const slack_ts = messageResult.ts;
        const slack_channel = messageResult.channel;
        
        console.log(`Message posted with ts: ${slack_ts}, channel: ${slack_channel}`);

        // Validate slack_ts and slack_channel before proceeding
        if (!slack_ts || !slack_channel) {
            await respond({
                text: "❌ Could not get Slack message metadata (ts or channel). Workflow not triggered.",
                response_type: "ephemeral"
            });
            console.error(`Missing slack_ts (${slack_ts}) or slack_channel (${slack_channel})`);
            return;
        }

        // First test token with a simple GET request
        const testResponse = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        console.log('Test API call status:', testResponse.status);
        
        if (testResponse.status !== 200) {
            const errorData = await testResponse.json();
            console.error('GitHub authentication error:', errorData);
            throw new Error(`GitHub authentication failed: ${testResponse.status} ${errorData.message}`);
        }

        // Now trigger the workflow with the correct endpoint
        const repo = process.env.GITHUB_REPO;
        const workflow = 'regression.yml';
        const url = `https://api.github.com/repos/${repo}/actions/workflows/${workflow}/dispatches`;

        console.log(`Triggering workflow at: ${url}`);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ref: 'ci',
                inputs: {
                    slack_ts: slack_ts,
                    slack_channel: slack_channel,
                    trigger_source: "slack",
                    test_group: command.text || "all"
                }
            })
        });

        console.log('Workflow dispatch status:', response.status);

        // GitHub returns 204 No Content for successful workflow dispatch
        if (response.status === 204) {
            console.log('Workflow successfully triggered');
        } else {
            // Only attempt to read the body if the status isn't 204
            const errorText = await response.text();
            throw new Error(`GitHub API returned ${response.status}: ${errorText}`);
        }

        // Update the message to indicate tests are running
        await app.client.chat.update({
            token: process.env.SLACK_BOT_TOKEN,
            channel: slack_channel,
            ts: slack_ts,
            text: `🏃‍♂️ Regression tests are running...\nTest group: ${command.text || "all"}\nTriggered by: <@${command.user_id}>`
        });

        // --- NEW: Post a summary placeholder in the thread ---
        await app.client.chat.postMessage({
            token: process.env.SLACK_BOT_TOKEN,
            channel: slack_channel,
            thread_ts: slack_ts,
            text: 'Test summary will be posted here after completion. ✅❌⏩',
        });

    } catch (error) {
        console.error(error);
        await respond({
            text: `❌ Failed to start regression tests: ${error.message}`,
            response_type: "in_channel"
        });
    }
});

// --- NEW: Helper to post test results summary and failed test names ---
// Call this from your workflow result handler (not shown here, but you would call it after test completion)
async function postTestResultsToSlack({ channel, thread_ts, passed, failed, skipped, failedTests }) {
    let summary = `*Test Results:*
✅ Passed: ${passed}\n❌ Failed: ${failed}\n⏩ Skipped: ${skipped}`;
    let details = '';
    if (failedTests && failedTests.length > 0) {
        details = `\n*Failed tests:*\n${failedTests.map(name => `• ${name}`).join('\n')}`;
    }
    await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_TOKEN,
        channel,
        thread_ts,
        text: summary + details,
    });
}

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Slack bot is running!');
})();