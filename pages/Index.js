import React from "react";
import Head from "next/head";

import Global from "./_global.js";
import Navigation from "../components/Navigation";
import env from "../env.config.js";
import styles from "./Index.scss";

export default class extends React.Component {
  render() {
    return (
      <Global>
        <Head>
          <title>Home</title>
        </Head>
        <Navigation />
        <h1 className={styles.headline}>
          Welcome to wild-next!
        </h1>
        <pre>env.config.js</pre><p>says you defined <em>{env.PUBLIC_URL}</em> as the public url for this environment.</p>
      </Global>
    );
  }
}
