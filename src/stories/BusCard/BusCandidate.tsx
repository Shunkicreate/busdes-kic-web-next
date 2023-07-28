import BusCandidateProps from "@/entities/storybook/BusCandidate.type";

const BusCandidate = (props: BusCandidateProps) => {
	const { StartTime, EndTime, BusName, selected } = props;
	return (
		<div className={`justify-start items-start gap-6 inline-flex ${selected ? "text-AlertMain" : ""}`}>
			<div className={`justify-start items-start gap-1 flex`}>
				<div className='text-center text-base font-normal leading-snug'>
					{StartTime.getHours()}:{StartTime.getMinutes()}
				</div>
				<div className='text-center text-lg font-normal leading-snug'>→</div>
				<div className='text-center text-base font-normal leading-snug'>
					{EndTime.getHours()}:{EndTime.getMinutes()}
				</div>
			</div>
			<div className='text-center text-sm font-normal leading-snug'>{BusName}</div>
		</div>
	);
};

export default BusCandidate;
