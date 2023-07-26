import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

export default function Home() {
	const router = useRouter()
	const handleClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, href: string) => {
		e.preventDefault()
		router.push(href)
	}
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
				<link rel='apple-touch-icon' href='%PUBLIC_URL%/android-chrome-192x192.png' />
				<link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
				<meta name="description" content="Busdes!【衣笠】衣笠生向けバスアプリ" />
				<meta property="og:title" content="Busdes!" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="%PUBLIC_URL%" />
				<meta property="og:image" content="%PUBLIC_URL%/ogp-large.png" />
				<meta property="og:description" content="Busdes!" />
				<meta name="apple-mobile-web-app-status-bar-style" content="white" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" />
				<meta name="msapplication-TileColor" content="#ffe600" />
				<meta name="theme-color" content="#F8F8F8" />
				<title>Busdes!</title>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Busdes!" />
				<meta name="twitter:description" content="Busdes!【衣笠】衣笠生向けバスアプリ" />
				<meta name="twitter:image" content="%REACT_APP_TWITTER_CARD_URL%" />
			</Head>
			<main className={styles.main}>
				<a href={'next-bus'} onClick={(e) => { handleClick(e, 'next-bus') }}>next-bus</a>
				<a href={'time-table'} onClick={(e) => { handleClick(e, 'time-table') }}>time-table</a>
			</main>

			<footer className={styles.footer}>
				&copy; 2023- Shunki Tada All rights reserved.
			</footer>
		</div>
	)
}
