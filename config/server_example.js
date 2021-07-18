module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'S3:pnco_:6903659XSWZG'),
      events: {
        onConnectionSuccess(e) {
          console.log(e.user, e.provider);
        },
        onConnectionError(e) {
          console.error(e.error, e.provider);
        },
      },
    },
    host: 'localhost', // Only used for --watch-admin
  },
});
