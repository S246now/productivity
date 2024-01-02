/* import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
} //says it needs a string...*/

import '@/styles/globals.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }) {
  const { user } = pageProps;

  return (
    <UserProvider user={user} profileUrl="/api/auth/me" loginUrl="/api/auth/login">
      <Component {...pageProps} />
    </UserProvider>
  );
}
