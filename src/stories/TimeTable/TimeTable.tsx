import TimeTableProps from "@/entities/storybook/TimeTable/TimeTable.type";
import TimeTableHeader from "./TimeTableHeader";
import BusStopSelectBox from "./BusStopSelectBox";

const TimeTable = (props: TimeTableProps) => {
	const { fr, to, BusStops, value } = props;
	const emptyFunc = () => {};
	return (
		<div>
			<TimeTableHeader fr={fr} to={to} switchBusStop={emptyFunc} />
			<BusStopSelectBox BusStops={BusStops} value={value} handleChange={emptyFunc} />
		</div>
	);
};

export default TimeTable;

