const deploy = require("./ecosystem.config.js").deploy;

module.exports = {
  apps: [{
    name: "staging",
    script: "server.js",
    watch: false,
    max_memory_restart: "200M",
    instances: 1,
    exec_mode: "fork"
  }],
  deploy
};
