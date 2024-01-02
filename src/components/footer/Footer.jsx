import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>DennyDev</div>
      <div className={styles.text}>
        Creative agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
