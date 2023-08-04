import { TabBarButtonProps } from '../../entities/storybook/TabBarButton.type'
import Image from 'next/image'


// This code replaces the extension of a file with "Selected" if a boolean is true.
// The function is called addSelected, and it takes two arguments: str and execute.
// str is a string and execute is a boolean.
// If execute is true, then the function will split str into two parts: fileName and extension.
// If execute is false, then the function will return str unchanged.
// If str is not in the format "fileName.extension", then the function will return str unchanged.
// Otherwise, the function will return "fileNameSelected.extension".
const addSelected = (str: string, execute: boolean) => {
    if(!execute) return str
	const arr = str.split('.')
	if(arr.length !== 2) return str
	const fileName = arr[0]
	const extension = arr[1]
	return `${fileName}Selected.${extension}`
}


const TabBarButton = (props: TabBarButtonProps) => {
	const { size, label, alt, src, backgroundColor, selected, onClick } = props
	return (
		<div className='w-32 h-12 pt-1 flex-col justify-center items-center inline-flex bg-PrimaryFocus' onClick={onClick}>
			<Image
				className={`w-6 h-6`}
				src={addSelected(src, selected)}
				width={24}
				height={24}
				alt={alt}
				// style={{ backgroundColor: backgroundColor }}
			/>
			<div
				className={`w-12 h-3.5 text-center text-xs font-normal leading-snug ${
					selected ? 'text-AlertMain' : ''
				}`}
			>
				{label}
			</div>
		</div>
	)
}

export default TabBarButton



