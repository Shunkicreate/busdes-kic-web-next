import BusCardProps from "@/entities/storybook/BusCard.type";
import DestinationArea from "./DestinationArea";
import WaitingArea from "./WaitingArea";

const BusCard = (props: BusCardProps) => {
	const { BusName, BusStop, BusData, fr, to } = props;
	return (
		<>
			<DestinationArea fr={fr} to={to} />
			<WaitingArea BusName={BusName} BusStop={BusStop} BusData={BusData} />
		</>
	);
};

export default BusCard;

