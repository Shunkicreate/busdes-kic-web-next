import TimeTableHoursProps from "@/entities/storybook/TimeTable/TimeTableHours.type";
import TimeTableHour from "./TimeTableHour";

const TimeTableHours = (props: TimeTableHoursProps) => {
	const { OneTimeTable } = props;
	return (
		<div className="mx-4">
			{OneTimeTable.map((TimeTable, i) => {
				return <TimeTableHour key={i} hour={TimeTable.hour} BusTimes={TimeTable.BusTimes} />;
			})}
		</div>
	);
};

export default TimeTableHours;

