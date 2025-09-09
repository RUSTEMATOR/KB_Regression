import { defineConfig, devices } from '@playwright/test';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  testIgnore: '**/*.skip.ts',
  timeout: 120000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 3,
  /* Opt out of parallel tests on CI. */
  workers: 8,


  reporter: [['html', { outputFolder: 'playwright-report' }],
    ['list'],
    // ['json', { outputFile: 'playwright-report/results.json' }],
    // ['playwright-qase-reporter', {
    //               debug: true,
    //               mode: 'testops',
    //               logging: true,
    //               testops: {
    //                 api: {
    //                   token: '2b3e65ab1ee17f1440a13c94b9d1da5429f590fdbcc8d080ddc41268ae50305b',
    //                 },
  
    //                 project: 'AUTOMATION',
    //                 uploadAttachments: true,
    //                 run: {
    //                   complete: true,
    //                   title: 'KB regression',
    //                 }
    //               }
    //             }
    //           ]
         ],

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    headless: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    // Setup projects for each baseURL
    {
      name: 'setup-default',
      testMatch: 'tests/setup/**/*.setup.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillycasino.com' }
    },
    {
      name: 'setup-bet1',
      testMatch: 'tests/setup/**/*.setup.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillybet1.com' }
    },
    {
      name: 'setup-win24',
      testMatch: 'tests/setup/**/*.setup.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillywin24.com' }
    },
    {
      name: 'setup-16',
      testMatch: 'tests/setup/**/*.setup.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillycasino16.com' }
    },

    // Default
    {
      name: 'Default-YesSetUp',
      dependencies: ['setup-default'],
      testMatch: 'tests/YesSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: './tests/setup/storageState.json', baseURL: 'https://www.kingbillycasino.com' },
    },
    {
      name: 'Default-NoSetUp',
      testMatch: 'tests/NoSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillycasino.com' },
    },

    // kingbillybet1.com
    {
      name: 'KB-Bet1-YesSetUp',
      dependencies: ['setup-bet1'],
      testMatch: 'tests/YesSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: './tests/setup/storageState.json', baseURL: 'https://www.kingbillybet1.com' },
    },
    {
      name: 'KB-Bet1-NoSetUp',
      testMatch: 'tests/NoSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillybet1.com' },
    },

    // kingbillywin24.com
    {
      name: 'KB-Win24-YesSetUp',
      dependencies: ['setup-win24'],
      testMatch: 'tests/YesSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: './tests/setup/storageState.json', baseURL: 'https://www.kingbillywin24.com' },
    },
    {
      name: 'KB-Win24-NoSetUp',
      testMatch: 'tests/NoSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillywin24.com' },
    },

    // kingbillycasino16.com
    {
      name: 'KB-16-YesSetUp',
      dependencies: ['setup-16'],
      testMatch: 'tests/YesSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: './tests/setup/storageState.json', baseURL: 'https://www.kingbillycasino16.com' },
    },
    {
      name: 'KB-16-NoSetUp',
      testMatch: 'tests/NoSetUp/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.kingbillycasino16.com' },
    },
  ],
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
