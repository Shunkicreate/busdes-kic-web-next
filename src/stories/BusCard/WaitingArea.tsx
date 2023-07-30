import WaitingAreaProps from "@/entities/storybook/WaitingArea.type";
import BusLineAndPickUpPoint from "./BusLineAndPickUpPoint";
import BusCandidate from "./BusCandidate";
import DisplayTime from "../DisplayTime/DisplayTime";

const WaitingArea = (props: WaitingAreaProps) => {
	const { BusData, BusName, BusStop } = props;
	if (BusData.length === 0)
		return (
			<div className='h-32 relative'>
				<p className='m-auto w-fit h-fit top-0 right-0 left-0 bottom-0 absolute'>接近中のバスはありません</p>
			</div>
		);
	return (
		<div className='px-10 pt-5 flex-col justify-start items-center gap-3 inline-flex'>
			<DisplayTime hour={0} minute={12} second={45} twStyle='text-4xl' />
			<BusLineAndPickUpPoint BusName={BusName} BusStop={BusStop} />
			<div className='flex-col justify-start items-start gap-0.5 flex pb-3'>
				{BusData.map((bus, i) => {
					const { StartTime, EndTime, BusName, selected } = bus;
					return <BusCandidate StartTime={StartTime} EndTime={EndTime} BusName={BusName} selected={selected} key={i} />;
				})}
			</div>
		</div>
	);
};

export default WaitingArea;

