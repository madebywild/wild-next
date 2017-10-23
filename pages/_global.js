
import React from "react";
import styles from "../global.scss";

export default props => (
  <div>
    {props.children}
    <style jsx global>{styles}</style>
  </div>
);
