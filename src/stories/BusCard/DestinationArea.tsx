import DestinationAreaProps from "@/entities/storybook/DestinationArea.type";
import Image from "next/image";
import { memo } from "react";

const DestinationArea = memo((props: DestinationAreaProps) => {
	const { fr, to } = props;
	return (
		<div className=''>
			<div className='grid grid-cols-11 py-4'>
				<div className='col-start-1 col-end-6 text-center text-black text-lg font-normal leading-snug'>{fr}</div>
				<Image
					className='col-start-6 m-auto'
					src={"/images/arrayVector.svg"}
					alt='array vector image'
					width={40}
					height={5.5}
				/>
				<div className='col-start-7 col-end-11 text-center text-black text-lg font-normal leading-snug'>{to}</div>
			</div>
			<div className='border border-stone-300'></div>
		</div>
	);
});

export default DestinationArea;

