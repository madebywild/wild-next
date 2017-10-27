import React from "react";
import Head from "next/head";
import Global from "./_global";
import Navigation from "../components/navigation";

export default class extends React.Component {

  render() {
    return (
      <Global>
        <Head>
          <title>About</title>
        </Head>
        <Navigation />
        <div className="about">
          This is totally "about" and stuff. Wooah.
        </div>
        <style jsx>{`
          .about {
            font-family: Roboto, sans-serif;
            font-size: 60px;
          }
        `}</style>
      </Global>
    );
  }

}
