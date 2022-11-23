import React from "react";
import styles from "./Header.module.css";

import rocketIcon from "../assets/rocket.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <img src={rocketIcon} />
      <h1>
        to<span>do</span>
      </h1>
    </div>
  );
};

export default Header;
