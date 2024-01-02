import Link from "next/link";
import Links from "./links/Links";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Creative Agency
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
