import pkg from '@slack/bolt';
const { App } = pkg;
import * as dotenv from "dotenv";

dotenv.config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
})

app.command('/regression', async ({command, ack, respond}) => {
    await ack();
    try {
        const result = await respond({
            text: 'Lemme cook! 🍳',
            response_type: 'in_channel'
        })

        const slack_ts = result.ts;
        const slack_channel = result.channel;

        // First test token with a simple GET request
        const testResponse = await fetch('https://api.github.com/user', {
            method: 'GET', // GET is the default, but explicitly stating it
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
                ref: 'main',
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

        await app.client.chat.update({
            token: process.env.SLACK_BOT_TOKEN,
            channel: slack_channel,
            ts: slack_ts,
            text: `🏃‍♂️ Regression tests are running...\nTest group: ${command.text || "all"}\nTriggered by: <@${command.user_id}>`
        })

    } catch (error) {
        console.error(error);
        await respond({
            text: `❌ Failed to start regression tests: ${error.message}`,
            response_type: "in_channel"
        });
    }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Slack bot is running!');
})();