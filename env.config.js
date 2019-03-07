/**
 * Regularly import this file on either server or client and have fun with it.
 * DO NOT PUT SENSITIVE INFORMATION LIKE ACCESS DATA HERE, THIS FILE MIGHT BE BUNDLED TO THE CLIENT!
 * Instead put it in an env file and use dotenv to access it on the server.
 */

// define all environments you expect here
const environments = {
  development: {
    PUBLIC_URL: "http://localhost:3000",
  },
  staging: {
    PUBLIC_URL: "http://staging.example.com",
  },
  production: {
    PUBLIC_URL: "http://example.com",
  },
};

// could be imported by the client or the server
const env = (typeof window !== "undefined" ? window.ENV : process.env.WILD_ENV) || "development";
module.exports = environments[env.toLowerCase()];
