module.exports = {
  target: 'serverless',
  future: {
    webpack5: true
  },
  webpack: function (config, options) {
    // config.experiments = {};
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      fs: false
      // path: false,
      // child_process: false
    };

    return config;
  }
};
// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     disable:
//       process.env.NODE_ENV === 'development' ||
//       process.env.NODE_ENV === 'preview' ||
//       process.env.NODE_ENV === 'production',
//     // delete two lines above to enable PWA in production deployment
//     // add your own icons to public/manifest.json
//     // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
//     dest: 'public',
//     register: true
//   },
//   target: 'serverless',
//   future: {
//     webpack5: true
//   }
// });
