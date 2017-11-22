module.exports = {
  deploy: {
    remotedev: {
      user: "ubuntu",
      key: "~/.ssh/development.pem",
      host: ["0.0.0.0"],
      ref: "origin/master",
      repo: "git@github.com:madebywild/<projectname>.git",
      path: "/var/www/<projectname>-development",
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.dev.config.js --env remotedev",
      env: {
        NODE_ENV: "remotedev",
        PORT: 8081
      }
    },
    staging: {
      user: "ubuntu",
      key: "~/.ssh/development.pem",
      host: ["0.0.0.0"],
      ref: "origin/master",
      repo: "git@github.com:madebywild/<projectname>.git",
      path: "/var/www/<projectname>-staging",
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.staging.config.js --env staging",
      env: {
        NODE_ENV: "staging",
        PORT: 8080
      }
    }
  }
};
