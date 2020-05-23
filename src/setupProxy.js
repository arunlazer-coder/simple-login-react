const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost/ci/testing_login/index.php/',
      changeOrigin: true,
    })
  );
};