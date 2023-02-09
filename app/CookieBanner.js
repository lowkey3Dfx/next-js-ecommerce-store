'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import styles from './page.module.scss';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);
  // check if there is a localStorage field for the cookieBanner

  // If not then initial value is false

  // If yes the initial value is what is stored in the browser
  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;

    setAreCookiesTermsAccepted(initialState);
  }, []);

  return (
    !areCookiesTermsAccepted && (
      <div className={styles.cookieBanner}>
        <p>
          This is our Cookie policy 🍪, accept Cookies or get yourself busy.
        </p>
        <div>
          <button
            onClick={() => {
              setAreCookiesTermsAccepted(true);
              setLocalStorage('areCookiesTermsAccepted', true);
            }}
          >
            Accept Cookies
          </button>
          <button>Decline Cookies</button>
        </div>
      </div>
    )
  );
}
