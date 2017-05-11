/* global PUBLIC_URL */

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Navigation from '../components/navigation';
import Cat from '../static/images/cat.svg';

export default class extends React.Component {

  static async getInitialProps ({ req }) {
    return req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent };
  }

  render () {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Navigation />
        <h1>Welcome to wild-next!</h1>
        <pre>env.config.js</pre><p>says you defined <em>{PUBLIC_URL}</em> as the public url for this environment.</p>
        <p>Your user agent is: {this.props.userAgent}</p>
        <p>Now enjoy this beautiful cat:</p>
        <Cat />
        <style jsx>{`
          h1, p {
            font-family: sans-serif;
            & em {
              color: #666;
            }
          }
        `}</style>
      </div>
    )
  }

}
