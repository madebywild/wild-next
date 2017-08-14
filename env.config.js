/*
 * These are 'magically' globally available as CONSTANTS.
 */

// define all environments you expect here
const environments = {
  default: {
    'process.env.PUBLIC_URL': 'https://localhost'
  },
  staging: {
    'process.env.PUBLIC_URL': 'https://staging.example.com'
  },
  production: {
    'process.env.PUBLIC_URL': 'https://example.com'
  }
}

// export these constants depending on the environment
if (process.env.NODE_ENV && environments[process.env.NODE_ENV.toLowerCase()]) {
  module.exports = environments[process.env.NODE_ENV.toLowerCase()];
} else {
  module.exports = environments['default'];
}
