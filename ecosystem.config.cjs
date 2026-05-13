module.exports = {
  apps: [
    {
      name: '6623-301',
      script: 'npx',
      args: 'serve -s dist -l 1422',
      env: {
        NODE_ENV: 'production',
        PORT: 1422,
      },
      cwd: './',
    },
  ],
};