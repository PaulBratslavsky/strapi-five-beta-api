module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'paul@devtogo.io',
        defaultReplyTo: 'paul@devtogo.io',
      },
    },
  },

  "users-permissions": {
    config: {
      register: {
        allowedFields: ["nickname"],
      },
    },
  },
});