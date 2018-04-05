import React from "react";
import Head from "next/head";

import Global from "./_global.js";
import Navigation from "../components/navigation";
import env from "../env.config.js";
import styles from "./index.scss";

export default class extends React.Component {
  render() {
    return (
      <Global>
        <Head>
          <title>Home</title>
        </Head>
        <Navigation />
        <h1>Welcome to wild-next!</h1>
        <pre>env.config.js</pre><p>says you defined <em>{env.PUBLIC_URL}</em> as the public url for this environment.</p>
        <style jsx>{styles}</style>
      </Global>
    );
  }
}
