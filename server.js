const express = require("express");
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
const address = require("address");
const qrcode = require("qrcode-terminal");

app.prepare().then(() => {

  const server = express();

  // here you could do some express stuff if you fancy, eg. running custom middleware or offering an API
  // server.get('/api', (req, res) => {
  //   return res.send({ version: 1.0 })
  // });

  // always make sure the handler is the last route entry
  server.use(handler);

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Env ${process.env.WILD_ENV} Ready on http://localhost:${port}`); // eslint-disable-line no-console

    const url = `http://${address.ip()}:${port}`;
    qrcode.generate(url, {small: true});
  });

});
