module.exports = {
  target: 'serverless',
  future: {
    webpack5: true
  },
  webpack: function (config, { dev, isServer }) {
    if (isServer) {
      // generates rss feed for the blog
      require('./utils/scripts/rss');
    }
    // TODO: Test Preact support during next deploy
    // Replace React with Preact only in client production build
    // My 3D rendering page is not working in preact
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat'
    //   });
    // }

    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      ...config.resolve.fallback,
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
