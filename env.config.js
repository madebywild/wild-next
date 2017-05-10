/*
 * These are 'magically' globally available as CONSTANTS
 */

// define all environments you expect here
const environments = {
  default: {
    'PUBLIC_URL': 'https://localhost'
  },
  staging: {
    'PUBLIC_URL': 'https://example.com'
  }
}

// export these constants depending on the environment
if (process.env.NODE_ENV && environments[process.env.NODE_ENV.toLowerCase()]) {
  module.exports = environments[process.env.NODE_ENV.toLowerCase()];
} else {
  module.exports = environments['default'];
}
