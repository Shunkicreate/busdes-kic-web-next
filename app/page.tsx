import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
	return (
		<>
			<main className={styles.main}>
				<Link href={`/next-bus`}>next-bus</Link>
				<Link href={`/time-table`}>time-table</Link>
			</main>
			<footer className={styles.footer}>&copy; 2023- Shunki Tada All rights reserved.</footer>
		</>
	)
}

export default Home

