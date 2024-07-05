// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>YouAreRad.org Clone</title>
        <meta name="description" content="Mental health care for everyone." />
      </Head>

      <main className="min-h-screen bg-gray-100 p-4">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold">Welcome to YouAreRad.org</h1>
          <p className="text-lg mt-2">Universal mental health care system.</p>
        </header>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
          <p className="text-center mt-4">Making mental health care accessible to everyone, everywhere.</p>
        </section>

        <footer className="text-center py-6">
          <p>&copy; 2024 YouAreRad.org Clone</p>
        </footer>
      </main>
    </div>
  );
}
