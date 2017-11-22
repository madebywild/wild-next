# How to make use of the deployment options

Our stack features a process that needs to be built for different environments and the frontend is served by a node-js server that has npm dependencies. Probably the best solution in terms of performance, but rather tedious to deploy for the developer. That's why we streamlined the biggest parts and for the rest you have this tutorial. It takes some time to set up. But then you just hit a command locally and the following tasks are automatically executed in order:
- changes environment to the specified one
- builds the project
- checks in your change to git
- downloads your changes on the remote server
- runs npm install on the remote machine
- starts or restarts the node server on the remote machine

## Actions in your repository

1) Since we build locally and deploy via git (for various reasons but most importantly because building is memory intensive and can max out cheap remote instances rather quickly) we have to check in the `.next` folder into the repository, so make sure itself and no parts of it are flagged in the .gitignore – `dist` is a catchy word you might find in there that you should get rid of.

2) Hook your `package.json` up with some generalized commands. Since we deploy master-pushed files it doesn't allow you to deploy when you have unpushed commits in your git history. We suggest to have one env-less `build-for-deploy` command: `next build && git add . && git commit -m 'build for deploy' && git push` and then individual commands for deploy environments in the scheme of `deploy-<envname>`, like this: `"deploy-staging": "export NODE_ENV=staging && npm run build-for-deploy && pm2 deploy staging"`.

3) In order to make that `pm2 deploy staging` command work, you need to have a `ecosystem.config.js` file in your root. If you plan on hosting multiple environments on the same server we suggest to have a general `ecosystem.config.js` in your root and a `ecosystem.<envname>.config.js` for every environment so the pm2-app-name can be different. You have to make sure the ending of those files is `...config.js`, otherwise pm2 doesn't pick it up. The `post-deploy` attribute of the environment in the ecosystem.config.js should then be the one that is passed to `pm2 startOrRestart`.

4) This step can only be done if the server is already set up, but is absolutely essential, before deploying, you have to run `pm2 deploy <env> setup` once.

5) Now you can deploy via `npm run deploy-<envname>` or what you specified in `package.json` easily.

## Actions on the remote server

1) First of all you have to make sure `git`, `nvm` and `pm2 (global installation)` are installed.

2) Make sure your reverse proxy (nginx/apache) have a vhost properly set up to proxy to the coming node instance. We suggest port 8080 for staging and 8081 for development.

3) You should have a Github machine user with a passwordless `id_rsa` key set up in github that has access to the repository. Copy the `id_rsa` and `ìd_rsa.pub` into the machines `~/.ssh/`-folder and test if it has access to the repository.

4) When pm2 is invoked to restart the server, it does so in a non-interactive way. That means that the three lines that `nvm` appended to your `~/.bashrc` have to be moved up all to the top of the file as the very first line so pm2 can properly resolve node and itself in the path.

5) Optionally once everything was deployed at least once you can run `pm2 startup` and `pm2 save` to make sure your apps are restarted on server crashes.

## Other commands that you might find useful

```
# Update the code
$ pm2 deploy <environment> update

# Revert to [n] th commit
$ pm2 deploy <environment> revert 1

# Execute a command on the server
$ pm2 deploy production exec "pm2 restart all"
```
