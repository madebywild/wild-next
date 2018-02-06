# wild next boilerplate <a href="https://twitter.com/madebywild"><img alt="@madebywild" src="https://img.shields.io/twitter/follow/madebywild.svg?style=social&label=Follow&style=plastic"></a>

While we were building our own SSR stack suddenly `zeit/next.js` popped up and just did everything right. Moving from our rather custom solution to next we came accustomed to a certain workflow and syntax, so we decided to ditch the old stuff and create a sane base configuration of `next` to kickoff new projects.

## Installation

`wildplate` had a global command palette, but the reality is – you're not gonna update an old project to work with the latest version of your globally installed toolkit. So we go old-school here and stay flexible for the future: Clone this boilerplate – fire and forget. Instead of complex updating mechanisms, clone again and migrate manually if needed.

```bash
$ git clone https://github.com/madebywild/wild-next.git your-project # change the name and clone this repo
$ cd your-project # jump into the project
$ rm -Rf .git # delete the local git folder
$ git init # start off your project clean
$ npm i # or yarn if you fancy
```

## Usage

- `npm run dev` to start working locally.
- `npm run build` to build for production.
- `npm start` to run in production.
- `npm run export` to export the site to static html.

## Folder structure

- `./components`
  Holds all components (repeating sections / widgets) that are used by `pages` to composite pages.
- `./elements`
  Holds all elements (repeating elements) that are used by `components` across the site. Classic candidates are buttons, form components etc.
- `./pages`
  Holds all pages (containers), each file should represent one route. They are automatically routed by their filename, but can have a custom route name (see further down below).
  - `./pages/_document.js`
  The underlying html for every page render. Try to stick to the pages components if possible, but use it for elegant side-wide stuff and if you need to integrate something that otherwise can't be done. See [Custom Document](https://github.com/zeit/next.js#custom-document) for more info on customization.
  - `./pages/_errors.js`
  404 or 500 errors from both client- and server side are handled by this component. We again have a sane default here, which frankly can be customized as needed.
- `./services`
  Every piece of JavaScript that does not export a Component should be housed here. Classic candidates are Singletons that encapsulate functionality like SDKs.
- `./static`
  Holds all static files (fonts / images / videos etc.), can also be used to transfer things like `robots.txt` or `favicon.ico`.

The `/pages` convention is pretty nifty and forces you to do bright decisions and poses a simple way for a new developer that works on the project to understand which comp is rendered from which route

In general – think the React way, for your convenience we also placed a `_global.js` file in the `/pages` directory which you probably want to use as the top-level wrapper of your pages. This file allows you to have styles like **fonts** or a css reset available globally. You can use it as a Layout file to have general markup as well. Or you separate it into its own file – in the end up to you.

## Images / Static Files

Sometimes back to the roots is nice. Simply put your stuff into `/static` and reference it as usual, but prefix the URLs with `/static/<filename>`. For **fonts** we recommend to simply put them in the `/static` folder and put font-face declarations into a Wrapper Component like `_global.js`.

## CSS Styles

We changed nothing as often as our styling setup. To have the best out of both worlds, we settled for the following approach: We use `next`'s [styled-jsx](https://github.com/zeit/styled-jsx/) for scoping CSS to a component, refer to their documentation for more information. To make our lifes easier, we included a [plugin](https://github.com/giuseppeg/styled-jsx-plugin-sass) so you can write SASS code within styled-jsx literals.

On top of that we have a special loader so can write your styles in an external `.scss`-file, import it into a variable which you then place inside a `<style jsx>{varname}</style>`-tag. That way you can separate our very large stylesheets, have code highlighting in every editor and still use all the features that styled-jsx has to offer. If you `@import` in your `.scss`-files, remember to always create your path from the root up and not from the location of the `.scss`-file.

## Javascript

Next runs mostly on convention over configuration, we'll highlight a few important pieces here, but for all your questions, simply head to their [zeit/next repository](https://github.com/zeit/next.js) to get all your questions answered.
Most importantly, you can safely write next-generation code and expect it to be transpiled (eg. `await/async`).

### Linting

The project introduces a linting setup that automatically lints your staged files when you try to commit. Apart from that you can run `npm run lint` as well to lint the whole project (not just staged files), but without committing. Additionally, there is the `npm run lint:withfix` command that shows all errors and tries to fix minor warnings automatically (eg. it switches quotes, spaces etc.)

You will probably run into lots of issues the longer you work on a commit, so it is recommended to setup linting in your code editor as well to mitigate issues right as they occur. This is not necessary, but helps. Since the `package.json` has the right rules in it, your local Eslint Editor Plugin will use the same rules. Here are a couple of handy links: [Atom Plugin](https://github.com/AtomLinter/linter-eslint), [Sublime Plugin](https://github.com/roadhump/SublimeLinter-eslint), [WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html), [vim](https://medium.com/@hpux/vim-and-eslint-16fa08cc580f), [Visual Studio Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Component Guidelines

As soon as your component has more than 300 lines, you should split it up into child components, unless you can express a valid reson why you'd rather not want to.

### Shader import

We use a custom webpack loader so you can import the strings of `.glsl`-files. You can then import other shader files as if it were SASS and you have the great glsl syntax highlighting that you love.

```js
// ./include.glsl
foo
// ./shader.glsl
@import ./include
goo
// ./page.js
import shader from './shader.glsl';
/*
// the "shader"-var is now this string:
foo
goo
 */
```

### Routing

Out of the box `next` has the convention of automatically gathering routes by `.js`-files in the `/pages` directory. As soon as you want parameterized urls, this alone is not really that beneficial anymore. Instead we have a `routes.js` file in the root that routes URLs to pages within the `/pages` directory. This file is used both on the server and the client.

**Note:** If you have no dynamic urls, simply don't add any routes in the `routes.js` file. The regular routes from the `/pages` filenames continue to work.

```js
// routes.js
const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('blog', '/blog/:slug')
routes.add('about', '/about-us/:foo(bar|baz)', 'index')
```

API: `routes.add(name, pattern, page = name)`

- `name` - The route name
- `pattern` - Express-style route pattern (uses [path-to-regexp](https://github.com/pillarjs/path-to-regexp))
- `page` - Page inside ./pages to be rendered (defaults to name)

The page component receives the matched URL parameters merged into `query`

```js
export default class Blog extends React.Component {
  static async getInitialProps ({query}) {
    // query.slug
  }
  render () {
    // this.props.url.query.slug
  }
}
```

Since this is custom, we can't use the default `Link` and `Router` interfaces from `next`. Thin wrappers around `Link` and `Router` add support for generated URLs based on route name and parameters. Just import them from your `routes` file:

#### `Link` example

```jsx
// pages/index.js
import {Link} from '../routes'

export default () => (
  <div>
    <div>Welcome to next.js!</div>
    <Link route='blog' params={{slug: 'hello-world'}}>
      <a>Hello world</a>
    </Link>
  </div>
)

```

API: `<Link route="name" params={params}>...</Link>`

- `route` - Name of a route
- `params` - Optional parameters for the route URL

It generates the URL and passes `href` and `as` props to `next/link`. Other props like `prefetch` will work as well.

---

#### `Router` example

```jsx
// pages/blog.js
import React from 'react'
import {Router} from '../routes'

export default class extends React.Component {
  handleClick () {
    Router.pushRoute('about', {foo: 'bar'})
  }
  render () {
    return (
      <div>
        <div>{this.props.url.query.slug}</div>
        <button onClick={this.handleClick}>
          Home
        </button>
      </div>
    )
  }
}
```
API:

`Router.pushRoute(name, params, options)`

`Router.replaceRoute(name, params, options)`

- `name` - Name of a route
- `params` - Optional parameters for the route URL
- `options` - Optional options

It generates the URL and passes `href` and `as` parameters to `next/router`.

You can optionally provide custom `Link` and `Router` objects, for example:

```javascript
// routes.js
const nextRoutes = require('next-routes')
const Link = require('./my/link')
const Router = require('./my/router')
const routes = module.exports = nextRoutes({Link, Router})
```

### Head

For changing things that happen in the `<head>` part of the page, make use of the `next/head` helper, see this example as it is pretty self-explanatory:

```js
import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
  </div>
)
```

_Note: The contents of <head> get cleared upon unmounting the component, so make sure each page completely defines what it needs in <head>, without making assumptions about what other pages added_

### Fetching Data

Our stack uses a headless CMS, so chance are very high that you want to fetch data before rendering a component (server-side-rendering) or navigating to a new page on the client. `next` uses a static async function called `getInitialProps()` that should be used exactly for that. Do yourself a favor and use the `async/await` syntax for added beauty.

```js
import React from 'react';
export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.example.com/article/1');
    const json = await res.json();
    return { headline: json.headline }
  }
  render() {
    return (
      <div>
        Hello World {this.props.headline}
      </div>
    );
  }
}
```

`getInitialProps` receives a context object with the following properties:

- `pathname` - path section of URL
- `query` - query string section of URL parsed as an object
- `asPath` - the actual url path
- `req` - HTTP request object (server only)
- `res` - HTTP response object (server only)
- `jsonPageRes` - Fetch Response object (client only)
- `err` - Error object if any error is encountered during the rendering

## Environments

As you will probably work off a `local`, a `staging` and a `production` environment, you can make use of the `env.config.js` file. It exports one object with the respective properties you define depending on your current environment. Simply import it in your scripts, we made sure the environment is properly read both on the server and the client.

**Do not put sensitive information like access data here, this file might be bundled to the client!** If you want to store access data for eg. database access, you will always only need it on the server, so you should either read it from environment variables or store it in a not-checked-into-git-file that you require in node and note its existence in your project readme.

This way you can easily build against different environments and eg. insert a different _API Url_ or _Google Analytics snippet_ to staging than production.

Make sure you fill out all fields you use for all environments you use, there is **no checking from the boilerplate if you do so** to keep things simple and flexible.

## Server and Middleware

In our boilerplate `next` is per default integrated into a `express` server. That means you can easily integrate middleware or a full database-fetching API into the server. Simply open up `server.js` in the root and edit to your likings. There is a sample line for an API route in there for your convenience.

## Export

The export feature can still be considered quite experimental with an API that will most likely change. Yet it is powerful and allows you to pre-render all routes into static html files, which makes the site eligible for static hosting on S3, which as you know is ugly-ass-cheap.

Running `npm run export` runs the build process first and then exports the site into the `/dist` subdirectory. This directoy is what you put up on your static hosting services as you are used to.

In the project root, there is a `next.config.js`, which has a `exportPathMap` export. It is a function that returns routes as key-value-pairs. At this moment, you have to manually mention all routes you want to be available. In future releases this process will be unified into one routing API, so you don't have three places to put routes into.

```javascript
exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/about": { page: "/about" },
  "/product/plant": { page: "/product", query: { slug: "plant" } },
  "/product/tree": { page: "/product", query: { slug: "tree" } },
});
```

Note the following caveats:

With `npm run export`, we build an HTML version of your app. At that time, we will automatically execute the `getInitialProps` functions of your pages and store the results.
This means you can only use `pathname`, `query` and `asPath` fields of the `context` object passed to `getInitialProps`. You cannot use `req` or `res` fields, because those require a server runtime.
Basically, you will not be able to render content dynamic in the server as we prebuilt HTML files. If you need that, you need run your app with `npm start`.

## Dev-Ops Helpers

<details>
<summary><strong>Sample nginx reverse proxy config</strong></summary>

```
location / {
  # default port, could be changed if you use next with custom server
  proxy_pass http://localhost:3000;

  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;

  # if you have try_files like this, remove it from our block
  # otherwise next app will not work properly
  # try_files $uri $uri/ =404;
}
```
</details>


<details>
<summary><strong>Sample pm2 line to start the server</strong></summary>

```bash
pm2 start npm --name "next" -- start
```
</details>
