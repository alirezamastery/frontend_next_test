import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="web test next"></meta>
      </Head>
      <h1>hello</h1>
    </div>
  )
}
