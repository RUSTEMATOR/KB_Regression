const fs = require('fs');
const fetch = require('node-fetch');

const resultsPath = 'playwright-report/results.json'; // Correct file path
const slackToken = process.env.SLACK_BOT_TOKEN;
const slackChannel = process.env.SLACK_CHANNEL_ID || process.argv[2];
const threadTs = process.env.SLACK_THREAD_TS || process.argv[3];

if (!fs.existsSync(resultsPath)) {
  console.error('No results file found:', resultsPath);
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
const suites = results.suites || [];
let passed = 0, failed = 0, skipped = 0;
const failedTests = [];

suites.forEach(suite => {
  suite.suites.forEach(subSuite => {
    subSuite.specs.forEach(spec => {
      spec.tests.forEach(test => {
        const status = test.results[0]?.status || 'skipped';
        if (status === 'passed') passed++;
        if (status === 'failed') {
          failed++;
          failedTests.push(test.title);
        }
        if (status === 'skipped') skipped++;
      });
    });
  });
});

let summary = `*Test Results:*\n✅ Passed: ${passed}\n❌ Failed: ${failed}\n⏩ Skipped: ${skipped}`;
if (failedTests.length > 0) {
  summary += `\n*Failed tests:*\n${failedTests.map(name => `• ${name}`).join('\n')}`;
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