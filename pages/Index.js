import React from "react";
import Head from "next/head";
import css from "styled-jsx/css";

import Global from "../components/Global.js";
import Navigation from "../components/Navigation";
import env from "../env.config.js";
import styles from "./Index.scss";

const {className: testClassName, styles: testStyles} = css.resolve`p { color: red }`;

export default class extends React.Component {

  renderChild = (data) => {
    return (<div key={data}>
      <p className={testClassName}>{data}</p>
    </div>);
  }

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

        {this.renderChild("style test")}

        <style jsx>{styles}</style>
        {testStyles}
      </Global>
    );
  }
}
