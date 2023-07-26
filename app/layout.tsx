import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Busdes!【衣笠】',
	description: 'Busdes!【衣笠】衣笠生向けバスアプリ',
	themeColor: '#F8F8F8',
	manifest: '%PUBLIC_URL%/manifest.json',
	icons: [
		{ rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
		{ rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', url: '/apple-touch-icon.png' },
	],
	appleWebApp: {
		capable: true,
		title: 'Busdes!【衣笠】',
		statusBarStyle: 'black-translucent',
	},
	openGraph: {
		type: 'website',
		url: '%PUBLIC_URL%',
		title: 'Busdes!【衣笠】',
		description: 'Busdes!【衣笠】衣笠生向けバスアプリ',
		siteName: 'Busdes!【衣笠】',
		images: [
			{
				url: '%PUBLIC_URL%/ogp-large.png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Busdes!【衣笠】',
		images: '%REACT_APP_TWITTER_CARD_URL%',
		description: 'Busdes!【衣笠】衣笠生向けバスアプリ',
	},
}

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}

