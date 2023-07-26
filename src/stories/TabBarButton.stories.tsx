import TabBar from './TabBar'
import TabBarButton from './TabBarButton'

export default {
	component: TabBarButton,
	title: 'TabBarButton',
}

export const Default = {
	args: {
		size: 'medium',
		label: '時刻表',
		alt: '路線追加ページへのボタンの画像',
		src: '/images/calenderBadge.svg',
		selected: true,
	},
}

