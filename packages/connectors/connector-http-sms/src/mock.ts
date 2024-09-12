import type { HttpBasicSmsConfig } from './types.js';

const mockedUsername = 'username';
const mockedPassword = 'password';
const mockedEndpoint = 'endpoint';

export const mockedConfig: HttpBasicSmsConfig = {
  endpoint: mockedEndpoint,
  username: mockedUsername,
  password: mockedPassword,
  templates: [
    {
      usageType: 'Generic',
      content: 'This is for testing purposes only. Your verification code is {{code}}.',
    },
  ],
};
