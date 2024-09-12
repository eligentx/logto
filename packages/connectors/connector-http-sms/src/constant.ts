import type { ConnectorMetadata } from '@logto/connector-kit';
import { ConnectorConfigFormItemType } from '@logto/connector-kit';

export const defaultMetadata: ConnectorMetadata = {
  id: 'http-sms-connector',
  target: 'http-sms',
  platform: null,
  name: {
    en: 'HTTP POST Request',
  },
  logo: './logo.svg',
  logoDark: null,
  description: {
    en: 'Send the SMS Request to a HTTP endpoint with Basic Auth',
  },
  readme: './README.md',
  formItems: [
    {
      key: 'endpoint',
      label: 'HTTP Endpoint',
      type: ConnectorConfigFormItemType.Text,
      required: true,
      placeholder: '<endpoint>',
    },
    {
      key: 'username',
      label: 'Username',
      type: ConnectorConfigFormItemType.Text,
      required: true,
      placeholder: '<username>',
    },
    {
      key: 'password',
      label: 'Password',
      type: ConnectorConfigFormItemType.Text,
      required: true,
      placeholder: '<password>',
    },
    {
      key: 'templates',
      label: 'Templates',
      type: ConnectorConfigFormItemType.Json,
      required: true,
      defaultValue: [
        {
          usageType: 'SignIn',
          content:
            'Your Logto sign-in verification code is {{code}}. The code will remain active for 10 minutes.',
        },
        {
          usageType: 'Register',
          content:
            'Your Logto sign-up verification code is {{code}}. The code will remain active for 10 minutes.',
        },
        {
          usageType: 'ForgotPassword',
          content:
            'Your Logto password change verification code is {{code}}. The code will remain active for 10 minutes.',
        },
        {
          usageType: 'Generic',
          content:
            'Your Logto verification code is {{code}}. The code will remain active for 10 minutes.',
        },
      ],
    },
  ],
};
