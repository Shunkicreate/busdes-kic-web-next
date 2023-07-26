import styles from './/Home.module.css'
import Link from 'next/link'
import TabBar from '@/stories/TabBar'
const Home = () => {
	return (
		<>
			<main className={styles.main}>
				<Link href={`/next-bus`}>next-bus</Link>
				<Link href={`/time-table`}>time-table</Link>
			</main>
			<TabBar label='' />
			<footer className={styles.footer}>&copy; 2023- Shunki Tada All rights reserved.</footer>
		</>
	)
}

export default Home