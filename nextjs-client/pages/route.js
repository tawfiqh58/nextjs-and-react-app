import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <p>About</p>
        <p>
          Go to <a href="/admin/about">/admin/about</a> react app
        </p>
      </main>
    </>
  );
}
