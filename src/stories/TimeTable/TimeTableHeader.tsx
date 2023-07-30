import TimeTableHeaderProps from "@/entities/storybook/TimeTable/TimeTableHeader.type";
import Image from "next/image";

const TimeTableHeader = (props: TimeTableHeaderProps) => {
	const { fr, to, switchBusStop } = props;
	return (
		<div className='w-full text-center top-12 pt-4 bg-main'>
			<div className='grid grid-cols-3'>
				<div className=''>
					<strong>出発</strong>
				</div>
				<div className=''>
					<strong>{fr}</strong>
				</div>
			</div>
			<div>
				<Image src={"/images/Arrow.svg"} alt='Arrow image' className='m-auto my-1' />
			</div>
			<div className='grid grid-cols-3'>
				<div className=''>
					<strong>到着</strong>
				</div>
				<div className=''>
					<strong>{to}</strong>
				</div>
			</div>
			<div className='absolute top-8 right-8 w-fit h-fit'>
				<Image src={"/images/ReverseButton.svg"} alt='' onClick={switchBusStop} />
			</div>
		</div>
	);
};

export default TimeTableHeader;
