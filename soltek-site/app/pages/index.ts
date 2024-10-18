// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SolTek - Solar Energy Solutions</title>
        <meta name="description" content="Expert solar consultancy and field services." />
      </Head>

      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Welcome to SolTek</h1>
        <p>Your trusted partner for solar energy solutions.</p>
        <a href="/about">Learn More About Us</a>
      </main>
    </div>
  );
}
