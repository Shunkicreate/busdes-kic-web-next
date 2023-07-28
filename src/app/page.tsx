import styles from ".//Home.module.css";
import Link from "next/link";
import TabBar from "@/stories/TabBar/TabBar";
const Home = () => {
	const emptyFunc = () => {};

	const tabBar = {
		selectedPage: {
			addRoute: true,
			nextBus: false,
			timeTable: false,
		},
		onClick: emptyFunc,
	};
	return (
		<>
			<main className={styles.main}>
				<Link href={`/next-bus`}>next-bus</Link>
				<Link href={`/time-table`}>time-table</Link>
			</main>
			<TabBar
				selectedPage={{
					addRoute: true,
					nextBus: true,
					timeTable: true,
				}}
			/>
			<footer className={styles.footer}>&copy; 2023- Shunki Tada All rights reserved.</footer>
		</>
	);
};

export default Home;
