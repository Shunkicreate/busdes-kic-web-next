"use client";
import TimeTableProps from "@/entities/storybook/TimeTable/TimeTable.type";
import TimeTableHeader from "./TimeTableHeader";
import BusStopSelectBox from "./BusStopSelectBox";
import TimeTableHours from "./TimeTableHours";
import SwiperTimeTable from "./SwiperTimeTable";

const TimeTable = (props: TimeTableProps) => {
	const { fr, to, BusStops, value, TimeTableData } = props;
	const emptyFunc = () => {};
	return (
		<div>
			<TimeTableHeader fr={fr} to={to} switchBusStop={emptyFunc} />
			<BusStopSelectBox BusStops={BusStops} value={value} handleChange={emptyFunc} />
            <SwiperTimeTable TimeTableData={TimeTableData} />
		</div>
	);
};

export default TimeTable;

