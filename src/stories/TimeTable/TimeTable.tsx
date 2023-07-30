import TimeTableProps from "@/entities/storybook/TimeTable/TimeTable.type";
import TimeTableHeader from "./TimeTableHeader";
import BusStopSelectBox from "./BusStopSelectBox";
import TimeTableHours from "./TimeTableHours";

const TimeTable = (props: TimeTableProps) => {
	const { fr, to, BusStops, value, OneTimeTable } = props;
	const emptyFunc = () => {};
	return (
		<div>
			<TimeTableHeader fr={fr} to={to} switchBusStop={emptyFunc} />
			<BusStopSelectBox BusStops={BusStops} value={value} handleChange={emptyFunc} />
            <TimeTableHours OneTimeTable={OneTimeTable} />
		</div>
	);
};

export default TimeTable;

