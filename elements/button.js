import React from "react";
import {Link} from "../routes";

export default props => (
  <div>
    <Link href={props.href} route={props.route} params={props.params}>
      <a href="">{props.children}</a>
    </Link>
    <style jsx>{`
        a {
          padding: 10px 20px;
          color: #666;
          display: inline-block;
          font: 14px menlo, monaco, monospace;
          background-color: #eee;
          border-radius: 2px;
          text-decoration: none;
          margin-right: 10px;
        }
      `}</style>
  </div>
);
