import WaitingAreaProps from "@/entities/storybook/WaitingArea.type";
import BusLineAndPickUpPoint from "./BusLineAndPickUpPoint";

const WaitingArea = (props: WaitingAreaProps) => {
	const { BusData, BusName, BusStop } = props;
	if (BusData.length === 0) return <div>接近中のバスはありません</div>;
	return (
		<div className='w-80 px-10 pt-5 flex-col justify-start items-center gap-3 inline-flex bg-PrimaryFocus'>
			<div className='text-center text-black text-4xl font-normal leading-snug'>00:05:19</div>
			<BusLineAndPickUpPoint BusName={BusName} BusStop={BusStop} />
			<div className='flex-col justify-start items-start gap-0.5 flex pb-3'>
				{BusData.map((bus, i) => {
					const { StartTime, EndTime, BusName, selected } = bus;
					return (
						<div className={`justify-start items-start gap-6 inline-flex ${selected ? "text-AlertMain" : ""}`} key={i}>
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
				})}
			</div>
		</div>
	);
};

export default WaitingArea;

