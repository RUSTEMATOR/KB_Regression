import { test as setup, request } from '@playwright/test';
import { MAIN_USER } from '../../src/Data/Users/mainUser';

setup.describe('Setup Session Storage', () => {
  setup('Set up session storage for main account via API', async () => {
    console.log('Setting up session state for the main account via API...');
    
    // Create a new request context
    const apiRequest = await request.newContext({
      baseURL: 'https://www.kingbillycasino.com',
      extraHTTPHeaders: {
        'Accept': 'application/vnd.s.v1+json',
        'Content-Type': 'application/json',
        'Origin': 'https://www.kingbillycasino.com',
        'Referer': 'https://www.kingbillycasino.com/?sign-in=modal'
      }
    });

    // Login via API
    const response = await apiRequest.post('/api/users/sign_in', {
      data: {
        user: {
          email: MAIN_USER.email,
          password: MAIN_USER.password
        }
      }
    });

    // Check response
    if (response.status() !== 201) {
      console.error('Failed to sign in via API:', await response.text());
      throw new Error('Failed to sign in via API');
    }

    console.log('API login successful, status:', response.status());
    
    // Save storage state from the API context
    await apiRequest.storageState({ path: './tests/setup/storageState.json' });
    
    console.log('Storage state saved successfully!');
  });
});
