import React from "react";
import styles from "./Global.scss";

export default props => (
  <div>
    <div className="test">Test</div>
    {props.children}
    <style jsx global>{styles}</style>
  </div>
);
