module.exports = {
  target: 'serverless',
  future: {
    webpack5: true
  },
  // images: { Place your image domains here
  //   domains: [
  //   ]
  // },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
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
      fs: false,
      child_process: false
      // path: false,
    };

    return config;
  }
};

// https://securityheaders.com
// Do not forget to modify script-src, in case I add something new
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
  worker-src 'self' 'unsafe-eval';
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src * blob: data:;
  connect-src *;
  font-src 'self' data:;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // Opt-out of Google FLoC: https://amifloced.org/
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];

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
