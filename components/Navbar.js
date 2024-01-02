import React from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/">Navbar</a>
      <div>
        <button>
          <a href="/login">Login</a>
        </button>
      </div>
    </nav>
  );
}