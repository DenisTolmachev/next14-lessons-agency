import Links from "./links/Links";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Denny`s Creative Agency</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
