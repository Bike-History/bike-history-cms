module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.bike-history.com',
  production: true,
  proxy: {
    enabled: true,
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '83a523d8b1e2d0d76b589cda87fcf68d'),
    },
  },
});
