import React from "react";
import styles from "./Global.scss";

export default function Navigation(props) {
  return (
    <div>
      {props.children}
      <style jsx global>{styles}</style>
    </div>
  );
}
