import TimeTableHourProps from "@/entities/storybook/TimeTable/TimeTableHour.type";
import TimeTableLine from "./TimeTableLine";

const TimeTableHour = (props: TimeTableHourProps) => {
	const { hour, BusTimes } = props;
	return (
		<div className='border-b border-border'>
			<h3>{hour}時</h3>
			{BusTimes.map((BusTime, i) => {
				return <TimeTableLine key={i} time={BusTime.time} BusName={BusTime.BusName} />;
			})}
		</div>
	);
};

export default TimeTableHour;

