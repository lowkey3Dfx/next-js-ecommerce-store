'use client';
import styles from './page.module.scss';

export default function CheckoutForm() {
  return (
    <div>
      <h3>Client Details</h3>
      <form method="POST" action="/thankyou" className={styles.form}>
        <label htmlFor="firstName">First Name</label>
        <input
          className={styles.input}
          data-test-id="checkout-first-name"
          id="firstName"
          name="firstName"
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          className={styles.input}
          data-test-id="checkout-last-name"
          id="lastName"
          name="lastName"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          data-test-id="checkout-email"
          id="email"
          name="email"
          type="email"
          required
        />

        <label htmlFor="address">Address</label>
        <input
          className={styles.input}
          data-test-id="checkout-address"
          id="address"
          name="address"
          required
        />

        <label htmlFor="city">City</label>
        <input
          className={styles.input}
          data-test-id="checkout-city"
          id="city"
          name="city"
          required
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          className={styles.input}
          data-test-id="checkout-postal-code"
          id="postalCode"
          name="postalCode"
          required
        />

        <label htmlFor="country">Country</label>
        <input
          className={styles.input}
          data-test-id="checkout-country"
          id="country"
          name="country"
          required
        />

        <h3>Payment Details</h3>
        <label htmlFor="country">Credit Card Number</label>
        <input
          className={styles.input}
          data-test-id="checkout-credit-card"
          id="country"
          name="country"
          required
        />

        <label htmlFor="creditCardExpirationDate">Expiration Date</label>
        <input
          className={styles.input}
          data-test-id="checkout-expiration-date"
          id="creditCardExpirationDate"
          name="creditCardExpirationDate"
          required
        />

        <label htmlFor="creditCardSecurityCode">Security Code</label>
        <input
          className={styles.input}
          data-test-id="checkout-security-code"
          id="creditCardSecurityCode"
          name="creditCardSecurityCode"
          required
        />
        <button className={styles.button} data-test-id="checkout-confirm-order">
          Confirm Order
        </button>
      </form>
    </div>
  );
}
