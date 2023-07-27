import BusCardProps from "@/entities/storybook/BusCard.type";
import DestinationArea from "./DestinationArea";
import WaitingArea from "./WaitingArea";

const BusCard = (props: BusCardProps) => {
	const { direction, BusData, fr, to } = props;
	return (
		<>
			<DestinationArea fr={fr} to={to} />
			<WaitingArea
				direction={direction}
				BusData={BusData}
			/>
		</>
	);
};

export default BusCard;

