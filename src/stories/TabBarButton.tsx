import { TabBarButtonProps } from '../entities/storybook/TabBarButton.type'
import Image from 'next/image'

const TabBarButton = (props: TabBarButtonProps) => {
	const { size, label, alt, src, backgroundColor, selected, onClick } = props
	return (
		<div className='w-32 h-12 pt-1 flex-col justify-center items-center inline-flex' onClick={onClick}>
			<Image
				className={`w-6 h-6 storybook-button--${size}`}
				src={src}
				width={24}
				height={24}
				alt={alt}
				style={{ backgroundColor: backgroundColor }}
			/>
			<div
				className={`w-12 h-3.5 text-center text-xs font-normal leading-snug  text-red-400 ${
					selected ? 'bg-amber-400' : ''
				}`}
			>
				{label}
			</div>
		</div>
	)
}

export default TabBarButton



