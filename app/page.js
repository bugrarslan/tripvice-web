import Link from 'next/link';
import './globals.css';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Tripvice</h1>
        <p className={styles.description}>
          Discover your next adventure with personalized travel plans powered by AI. 
        </p>
        <div className={styles.buttons}>
          <a href="/privacy-policy" className={styles.button}>
            Privacy Policy
          </a>
          <a href="/term-of-use" className={styles.button}>
            Terms of Use
          </a>
          <a href="/delete-account" className={styles.button}>
            Delete Account Request
          </a>
        </div>
      </main>
    </div>
  );
}
