import BusLineAndPickUpPointProps from "@/entities/storybook/BusLineAndPickUpPoint.type";

const BusLineAndPickUpPoint = (props: BusLineAndPickUpPointProps) => {
	const { BusName, BusStop } = props;
	return (
		<div className="text-center text-black text-base font-normal leading-snug">
			<span className="pr-2">{BusName}</span>
			<span>{BusStop}番乗り場</span>
		</div>
	);
};

export default BusLineAndPickUpPoint;