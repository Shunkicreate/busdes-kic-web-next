"use client"
import TimeTableHeaderProps from "@/entities/storybook/TimeTable/TimeTableHeader.type";
import Image from "next/image";

const TimeTableHeader = (props: TimeTableHeaderProps) => {
	const { fr, to, switchBusStop } = props;
	return (
		<div className='w-full py-2 text-center bg-main relative'>
			<div className='grid grid-cols-3'>
				<div className=''>
					<strong>出発</strong>
				</div>
				<div className=''>
					<strong>{fr}</strong>
				</div>
			</div>
			<Image src={"/images/Arrow.svg"} alt='Arrow image' width={16} height={16} className='m-auto my-1' />
			<div className='grid grid-cols-3'>
				<div className=''>
					<strong>到着</strong>
				</div>
				<div className=''>
					<strong>{to}</strong>
				</div>
			</div>
			<div className='absolute top-0 bottom-0 right-8 my-auto w-fit h-fit'>
				<Image src={"/images/ReverseButton.svg"} alt='' width={32} height={32} onClick={switchBusStop} />
			</div>
		</div>
	);
};

export default TimeTableHeader;

