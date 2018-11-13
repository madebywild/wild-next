import React from "react";
import styles from "./Global.scss";

export default props => (
  <div>
    {props.children}
    <style jsx>{styles}</style>
  </div>
);
