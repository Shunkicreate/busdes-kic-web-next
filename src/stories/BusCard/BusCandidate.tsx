import BusCandidateProps from "@/entities/storybook/BusCandidate.type";
import DisplayTime from "../DisplayTime/DisplayTime";
import { memo } from "react";

const BusCandidate = memo((props: BusCandidateProps) => {
	const { StartTime, EndTime, BusName, selected, onClick } = props;
	return (
		<button
			className={`justify-start items-start gap-6 inline-flex ${selected ? "text-AlertMain" : ""}`}
			onClick={onClick}
		>
			<div className={`justify-start items-start gap-1 flex`}>
				<DisplayTime hour={StartTime.getHours()} minute={StartTime.getMinutes()} twStyle='text-base' />
				<div className='text-center text-lg font-normal leading-snug'>→</div>
				<DisplayTime hour={EndTime.getHours()} minute={EndTime.getMinutes()} twStyle='text-base' />
			</div>
			<div className='text-center text-sm m-auto'>{BusName}</div>
		</button>
	);
});

export default BusCandidate;

