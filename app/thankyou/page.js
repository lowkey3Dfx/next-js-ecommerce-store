import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Page to say thank you',
};

export const dynamic = 'force-dynamic';

export default function ThankyouPage() {
  return (
    <div className={styles.thankYouDiv}>
      <h1>Thank you for your order</h1>

      {/* <Image
        src="https://giphy.com/embed/Q94TX0ecoNtTadxhvx"
        width="100%"
        height="100%"
      /> */}
    </div>
  );
}
