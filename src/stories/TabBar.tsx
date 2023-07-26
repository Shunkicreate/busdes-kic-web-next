import { TabBarProps } from '../entities/storybook/TabBar.type'
import TabBarButton from './TabBarButton'

const TabBar = (props: TabBarProps) => {
	return (
		<div>
			<TabBarButton
				size='medium'
				label='路線追加'
				alt='路線追加ページへのボタンの画像'
				src='/images/plus.svg'
				selected={true}
			/>
			<TabBarButton
				size='medium'
				label='次のバス'
				alt='路線追加ページへのボタンの画像'
				src='/images/timer.svg'
				selected={false}
			/>
			<TabBarButton
				size='medium'
				label='時刻表'
				alt='路線追加ページへのボタンの画像'
				src='/images/calenderBadge.svg'
				selected={false}
			/>
		</div>
	)
}

export default TabBar

