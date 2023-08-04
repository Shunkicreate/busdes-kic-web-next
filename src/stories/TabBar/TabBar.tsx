import { TabBarProps } from '../../entities/storybook/TabBar.type'
import TabBarButton from './TabBarButton'

const TabBar = (props: TabBarProps) => {
	const { selectedPage } = props
	return (
		<div>
			<TabBarButton
				label='路線追加'
				alt='路線追加ページへのボタンの画像'
				src='/images/plus.svg'
			/>
			<TabBarButton
				label='次のバス'
				alt='路線追加ページへのボタンの画像'
				src='/images/timer.svg'
			/>
			<TabBarButton
				label='時刻表'
				alt='路線追加ページへのボタンの画像'
				src='/images/calenderBadge.svg'
			/>
		</div>
	)
}

export default TabBar

