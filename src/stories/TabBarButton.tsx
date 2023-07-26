import { TabBarButtonProps } from '../entities/storybook/TabBarButton.type'
import Image from 'next/image'


//文字列の拡張子の前にSelectedをつける関数
const addSelected = (str: string, execute: boolean) => {
	if(!execute) return str
	const arr = str.split('.')
	return arr[0] + 'Selected.' + arr[1]
}


const TabBarButton = (props: TabBarButtonProps) => {
	const { size, label, alt, src, backgroundColor, selected, onClick } = props
	return (
		<div className='w-32 h-12 pt-1 flex-col justify-center items-center inline-flex text-red-400' onClick={onClick}>
			<Image
				className={`w-6 h-6 storybook-button--${size}`}
				src={addSelected(src, selected)}
				width={24}
				height={24}
				alt={alt}
				// style={{ backgroundColor: backgroundColor }}
			/>
			{addSelected(src, selected)}
			<div
				className={`w-12 h-3.5 text-center text-xs font-normal leading-snug ${
					selected ? 'text-amber-400' : ''
				}`}
			>
				{label}
			</div>
		</div>
	)
}

export default TabBarButton



