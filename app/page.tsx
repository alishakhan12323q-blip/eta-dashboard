import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Welcome to ETA Dashboard</h1>
        <p>
          This dashboard is powered by{' '}
          <Link href="https://vercel.com">Vercel</Link> Web Analytics.
        </p>
        <div className={styles.features}>
          <h2>Features</h2>
          <ul>
            <li>✓ Real-time analytics tracking</li>
            <li>✓ Built with Next.js</li>
            <li>✓ Vercel Web Analytics integration</li>
            <li>✓ TypeScript support</li>
          </ul>
        </div>
        <p className={styles.note}>
          Visit your{' '}
          <Link href="https://vercel.com/dashboard">Vercel Dashboard</Link> to
          view your analytics data.
        </p>
      </div>
    </main>
  );
}
