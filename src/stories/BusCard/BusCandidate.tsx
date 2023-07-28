import BusCandidateProps from "@/entities/storybook/BusCandidate.type";
import DisplayTime from "../DisplayTime/DisplayTime";

const BusCandidate = (props: BusCandidateProps) => {
	const { StartTime, EndTime, BusName, selected } = props;
	return (
		<div className={`justify-start items-start gap-6 inline-flex ${selected ? "text-AlertMain" : ""}`}>
			<div className={`justify-start items-start gap-1 flex`}>
				<DisplayTime hour={StartTime.getHours()} minute={StartTime.getMinutes()} fontSize='text-base' />
				<div className='text-center text-lg font-normal leading-snug'>→</div>
				<DisplayTime hour={StartTime.getHours()} minute={StartTime.getMinutes()} fontSize='text-base' />
			</div>
			<div className='text-center text-sm m-auto'>{BusName}</div>
		</div>
	);
};

export default BusCandidate;

