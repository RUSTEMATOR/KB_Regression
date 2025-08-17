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

        const messageTs = result.ts;
        const channelId = result.channel;


        const repo = process.env.GITHUB_REPO;
        const workflow = 'regression.yml';
        const url = `https://api.github.com/repos/${repo}/actions/workflows/${workflow}/dispatches`;

        await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ref: 'main',
                inputs: {
                    message_ts: messageTs,
                    channel_id: channelId
                }
            })
        })

        await app.client.chat.update({
            token: process.env.SLACK_BOT_TOKEN,
            channel: channelId,
            ts: messageTs,
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