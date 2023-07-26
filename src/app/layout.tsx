import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Busdes!【衣笠】',
	description: 'Busdes!【衣笠】衣笠生向けバスアプリ',
	themeColor: '#F8F8F8',
	manifest: '/manifest.json',
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
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
