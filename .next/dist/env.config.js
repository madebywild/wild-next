"use strict";

/**
 * Regularly import this file on either server or client and have fun with it.
 * DO NOT PUT SENSITIVE INFORMATION LIKE ACCESS DATA HERE, THIS FILE MIGHT BE BUNDLED TO THE CLIENT!
 * Instead put it in a config file in the server folder and only require it from there.
 */

// define all environments you expect here

var environments = {
  development: {
    PUBLIC_URL: "https://localhost"
  },
  staging: {
    PUBLIC_URL: "https://staging.example.com"
  },
  production: {
    PUBLIC_URL: "https://example.com"
  }
};

// could be imported by the client or the server
var env = (typeof window !== "undefined" ? window.ENV : process.env.NODE_ENV) || "development";
module.exports = environments[env.toLowerCase()];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudi5jb25maWcuanMiXSwibmFtZXMiOlsiZW52aXJvbm1lbnRzIiwiZGV2ZWxvcG1lbnQiLCJQVUJMSUNfVVJMIiwic3RhZ2luZyIsInByb2R1Y3Rpb24iLCJlbnYiLCJ3aW5kb3ciLCJFTlYiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJtb2R1bGUiLCJleHBvcnRzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQU1BOztBQUNBLElBQU07O2dCQUFlLEFBQ04sQUFDQyxBQUVkO0FBSGEsQUFDWDs7Z0JBRmlCLEFBSVYsQUFDSyxBQUVkO0FBSFMsQUFDUDs7Z0JBTEosQUFBcUIsQUFPUCxBQUNFO0FBREYsQUFDVjtBQVJpQixBQUNuQjs7QUFXRjtBQUNBLElBQU0sTUFBTSxDQUFDLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGNBQWMsT0FBaEMsQUFBdUMsTUFBTSxRQUFBLEFBQVEsSUFBdEQsQUFBMEQsYUFBdEUsQUFBbUY7QUFDbkYsT0FBQSxBQUFPLFVBQVUsYUFBYSxJQUE5QixBQUFpQixBQUFhLEFBQUkiLCJmaWxlIjoiZW52LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGhvbWFzL2Rldi93aWxkLW5leHQifQ==