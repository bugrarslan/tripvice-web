import Head from 'next/head';
import styles from './privacy-policy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | Tripvice</title>
        <meta
          name="description"
          content="Learn more about Tripvice's privacy practices and how we protect your data."
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.description}>
          Welcome to Tripvice! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and
          protect your information when you use our services.
        </p>

        <section className={styles.section}>
          <h2 className={styles.heading}>Information We Collect</h2>
          <ul className={styles.list}>
            <li>
              <strong>Personal Information:</strong> When you sign up, we collect your name, email, and other details.
            </li>
            <li>
              <strong>Travel Preferences:</strong> Information about destinations, budgets, and companions you provide.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>How We Use Your Information</h2>
          <p className={styles.description}>
            We use the information collected to:
          </p>
          <ul className={styles.list}>
            <li>Provide personalized travel plans and suggestions.</li>
            <li>Improve our services and user experience.</li>
            <li>Send notifications about your trips and updates.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Sharing Your Data</h2>
          <p className={styles.description}>
            We do not share your data with third parties without your consent, except when required by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Your Rights</h2>
          <p className={styles.description}>
            You have the right to access, update, or delete your personal data. Contact us at{' '}
            <a href="mailto:bugrarsln7@gmail.com" className={styles.link}>
            bugrarsln7@gmail.com
            </a>{' '}
            for assistance.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Changes to This Policy</h2>
          <p className={styles.description}>
            We may update this Privacy Policy from time to time. Please review it periodically for changes.
          </p>
        </section>

        <p className={styles.contact}>
          If you have any questions, feel free to contact us at{' '}
          <a href="mailto:bugrarsln7@gmail.com" className={styles.link}>
            bugrarsln7@gmail.com
          </a>
          .
        </p>
      </main>
    </div>
  );
}
