# wild next boilerplate

<p align="center">
  <a href="https://twitter.com/madebywild">
    <img alt="@madebywild" src="https://img.shields.io/twitter/follow/madebywild.svg?style=social&label=Follow&style=plastic">
  </a>
</p>

## Introduction

While we were building our own SSR stack suddenly `zeit/next.js` popped up and just did everything right. Moving from our rather custom solution to next we came accustomed to a certain workflow and syntax, so we decided to ditch the old stuff and create a sane base configuration to kickoff new projects.

## Usage

- `npm i` or `yarn` once to install dependencies.
- `npm run dev` to start working locally.
- `npm run build` to build for production.
- `npm start` to run in production.
- TBD: static rendering into plain html

## Folder structure

- pages

components
elements
services
static
TBD

The `/pages` convention is pretty nifty and forces you to do bright decisions and poses a simple way for a new developer that works on the project to understand which comp is rendered from which route. Think the React way, for example if you want to use a layout across pages, simply create a component, call it for example `Layout` and use it as the top-level component inside your `pages`:

```js
export default () => (
  <Layout>
    <div>Hello World.</div>
  </Layout>
)
```

## Images / Static Files

Sometimes back to the roots is nice. Simply put your stuff into `/static` and reference it as usual. The only exception are SVGs that you'd like to inline. In that case import the svg and use it as JSX:

```js
import Cat from '../static/images/cat.svg';
// further down in your render()
<Cat />
```

## Javascript

Next runs mostly on convention over configuration, we'll highlight a few important pieces here, but for all your questions, simply head to their [zeit/next repository](https://github.com/zeit/next.js) to get all your questions answered.
Most importantly, your can safely write next-generation code and expect it to be transpiled (eg. `await/async`), to be exact we go as far as `stage-0`.

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

As you will probably work off a `local`, a `staging` and a `production` environment, you can make use of the `env.config.js` file which reads the currently set `NODE_ENV` and replaces constants during compilation with the respective values. The keys of the environment object are then usable as if there was a global variable with that name.

This way you can easily build against different environments and eg. insert a different _Google Analytics snippet_ to staging than production.

Make sure you fill out all fields you use for all environments you use, there is **no checking from the boilerplate if you do so** to keep things simple and flexible.

## Server and Middleware

In our boilerplate `next` is per default integrated into a `express` server. That means you can easily integrate middleware or a full database-fetching API into the server. Simply open up `server.js` in the root and edit to your likings. There is a sample line for an API route in there for your convenience.

## CSS Styles

This one is something to get accustomed to, but we're ditching our beloved sass syntax for the syntax that is drafted for the official CSS spec. Although these specs are not yet respected by all browser vendors, we simply transpile them so they work today. Here's an overview of things that you are used to do, but now are done probably differently:

<details>
<summary><strong>Nesting</strong></summary>

Nesting is done through the syntax of the [CSS Nesting Module Level 3](http://tabatkins.github.io/specs/css-nesting/)

```css
/* before */
a, b {
  color: red;
  & c, & d {
    color: white;
  }
  & & {
    color: blue;
  }
  &:hover {
    color: black;
  }
  @media (min-width: 30em) {
    color: yellow;
    @media (min-device-pixel-ratio: 1.5) {
      color: green;
    }
  }
}
/* after */
a, b {
  color: red;
}
a c, a d, b c, b d {
  color: white;
}
a a, b b {
  color: blue;
}
a:hover, b:hover {
  color: black;
}
@media (min-width: 30em) {
  a, b {
    color: yellow;
  }
}
@media (min-width: 30em) and (min-device-pixel-ratio: 1.5) {
  a, b {
    color: green;
  }
}
```
</details>

<details>
<summary><strong>Imports</strong></summary>

We don't have CSS importing. And that has a reason. Importing was necessary to organize SCSS code because in the end we compiled to one monolithic .css file. With the new approach of organizing styles along with their respective components this feature simply is not necessary anymore. If there is data you need to share across components (and their respective styles) it makes much more sense to store it in a .js or .json file and import this data into your component and then use it. This also solves the age old problem of Javascript-Stylesheet-Interoperability.
</details>

<details>
<summary><strong>Variables</strong></summary>

See the point `Imports` above. Classic scss $variables are simply not needed anymore, just use regular Javascript variables. Since you write the styles in a template literal in JSX, you can even go all the way to using expressions. To share variables across files, simply put them in a seperate file and important where you need them in classic Javascript fashion. That being said if you happen to find a usecase where that doesn't make sense, you can use [CSS Custom Properties for Cascading Variables Module Level 1](http://www.w3.org/TR/css-variables/) to define variables within css. **Be aware that the definitions are limited to :root selector!**

```css
:root {
  --mainColor: red;
}
a {
  color: var(--mainColor);
}
```
</details>

<details>
<summary><strong>Mixins</strong></summary>

Sometimes you felt like repeating yourself and you used a Sass-Mixin to keep things DRY. Before you overthink things – maybe you can simply use your good old friend JavaScript to do the heavy lifting for you? If that's not applicable you can use the [CSS @apply Rule](https://tabatkins.github.io/specs/css-apply-rule) to define variables within css. **Be aware that the definitions are limited to :root selector!**

```css
:root {
  --danger-theme: {
    color: white;
    background-color: red;
  };
}
.danger {
  @apply --danger-theme;
}
```
</details>

<details>
<summary><strong>Media Queries</strong></summary>

There's not much to say here, other than we have the two upcoming features of [Custom Media Queries](http://dev.w3.org/csswg/mediaqueries/#custom-mq) and [Media Query Ranges](https://drafts.csswg.org/mediaqueries/#mq-ranges) transpiled in our build.

**Custom Media Queries**
A nice way to have semantic media queries.

```css
@custom-media --small-viewport (max-width: 30em);
/* check out media queries ranges for a better syntax !*/

@media (--small-viewport) {
  /* styles for small viewport */
}
```

**Media queries ranges**
Allows to replace min-/max- with <= & >= (syntax easier to read).

```css
@media (width >= 500px) and (width <= 1200px) {
  /* your styles */
}
/* or coupled with custom media queries */
@custom-media --only-medium-screen (width >= 500px) and (width <= 1200px);
@media (--only-medium-screen) {
  /* your styles */
}
```
</details>

<details>
<summary><strong>Colors</strong></summary>

If you used the nice color functions from Sass and are missing them now, you have two options: Use [any Javascript function](https://github.com/Qix-/color) in your style-jsx since, well, in the end it's just JavaScript!

Or, if you want to stick to CSS syntax, use the functions that will be available in future CSS versions: Check out the [cssnext features page](http://cssnext.io/features) where there's a list of things you can use.
</details>

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