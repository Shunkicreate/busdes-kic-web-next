import TimeTableProps from "@/entities/storybook/TimeTable/TimeTable.type";
import TimeTableHeader from "./TimeTableHeader";

const TimeTable = (props: TimeTableProps) => {
	const emptyFunc = () => {};
	return (
		<div>
			<TimeTableHeader fr='立命館大学' to='京都駅' switchBusStop={emptyFunc} />
		</div>
	);
};

export default TimeTable;
