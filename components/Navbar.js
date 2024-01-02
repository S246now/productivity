import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <div>
      {user ? (
          <div>
            <a style={{ marginRight: 8 }} href="/profileClient">
              Profile
            </a>
            <button>
              <a href="/api/auth/logout">Logout</a>
            </button>
          </div>
        ) : (
          <button>
            <a href="/api/auth/login">Login</a>
          </button>
        )}
        /*para comprobar que la ruta está protegida*/
        {/* <a style={{ marginRight: 8 }} href="/profileClient">
              Profile
        </a> */}
      </div>
    </nav>
  );
}