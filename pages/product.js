import React from 'react';
import Head from 'next/head';
import Navigation from '../components/navigation';

export default class extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <title>About</title>
        </Head>
        <Navigation />
        <div className="about">
          This product is called {this.props.url.query.slug}
        </div>
        <style jsx>{`
          .about {
            font-family: sans-serif;
            font-size: 60px;
          }
        `}</style>
      </div>
    );
  }

}
