import fs from 'fs';

const resultsPath = 'playwright-report/results.json';
const slackToken = process.env.SLACK_BOT_TOKEN;
const slackChannel = process.env.SLACK_CHANNEL_ID || process.argv[2];
const threadTs = process.env.SLACK_THREAD_TS || process.argv[3];

if (!fs.existsSync(resultsPath)) {
  console.error('No results file found:', resultsPath);
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
const tests = results.suites.flatMap(suite => suite.specs.flatMap(spec => spec.tests));
const passed = tests.filter(t => t.status === 'passed').length;
const failed = tests.filter(t => t.status === 'failed').length;
const skipped = tests.filter(t => t.status === 'skipped').length;
const failedNames = tests.filter(t => t.status === 'failed').map(t => t.title);

let summary = `*Test Results:*\n✅ Passed: ${passed}\n❌ Failed: ${failed}\n⏩ Skipped: ${skipped}`;
if (failedNames.length > 0) {
  summary += `\n*Failed tests:*\n${failedNames.map(name => `• ${name}`).join('\n')}`;
}

fetch('https://slack.com/api/chat.postMessage', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${slackToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    channel: slackChannel,
    thread_ts: threadTs,
    text: summary
  })
})
  .then(res => res.json())
  .then(data => {
    if (!data.ok) {
      console.error('Slack API error:', data);
      process.exit(1);
    }
    console.log('Posted results to Slack thread.');
  })
  .catch(err => {
    console.error('Failed to post to Slack:', err);
    process.exit(1);
  });