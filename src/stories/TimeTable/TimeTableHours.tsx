import TimeTableHoursProps from "@/entities/storybook/TimeTable/TimeTableHours.type";
import TimeTableHour from "./TimeTableHour";

const TimeTableHours = (props: TimeTableHoursProps) => {
	const { OneTimeTable } = props;
	return (
		<>
			{OneTimeTable.map((TimeTable, i) => {
				return <TimeTableHour key={i} hour={TimeTable.hour} BusTimes={TimeTable.BusTimes} />;
			})}
		</>
	);
};

export default TimeTableHours;

