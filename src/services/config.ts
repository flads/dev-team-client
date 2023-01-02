const config = {
  client: {
    url: 'http://127.0.0.1:8080',
  },
  api: {
    url: 'http://127.0.0.1:3000',
  },
};

if (process.env.NODE_ENV === 'production') {
  config.client.url = 'https://dev-team.flads.me';
  config.api.url = 'https://api.dev-team.flads.me';
}

export default config;
