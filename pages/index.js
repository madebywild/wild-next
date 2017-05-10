/* global PUBLIC_URL */

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import Cat from '../static/images/cat.svg';

Router.routeChangeStart = (url) => {
  console.log(url);
}
Router.routeChangeComplete = (url) => {
  console.log(url);
}
Router.routeChangeError = (err, url) => {
  console.log(err, url);
}
Router.beforeHistoryChange = (url) => {
  console.log(url);
}
Router.appUpdated = (nextRoute) => {
  console.log(nextRoute);
}

export default class extends React.Component {

  static async getInitialProps ({ req }) {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js');
    // const json = await res.json();
    // return { stars: json.stargazers_count };
    return req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent };
  }

  render () {
    return (
      <div>
        <Head>
          <title>Chobani</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        Welcome to the wild-next! at { PUBLIC_URL }
        <Link prefetch href="/about"><a>About</a></Link>
        <div className="goo"><span>gogo</span></div>
        <Cat />
        <style jsx>{`
          :global(:root) {
            --color: white;
          }
          .goo {
            background: var(--color);
            background: white;
            & span {
              color: blue;
              font-weight: bold;
              padding: 20px;
            }
          }
          div {
            background: red;
          }
          @media (max-width: 600px) {
            div {
              background: blue;
            }
          }
        `}</style>
      </div>
    )
  }

}
