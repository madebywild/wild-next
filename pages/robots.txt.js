import React from "react";

export default class Robots extends React.Component {
  static async getInitialProps({res}) {
    if (process.env.WILD_ENV !== "production") {
      res.write("User-agent: *\nDisallow: /");
      return res.end();
    }
    return res.end();
  }
}
