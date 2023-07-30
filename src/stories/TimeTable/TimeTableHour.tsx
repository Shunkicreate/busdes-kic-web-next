import TimeTableHourProps from "@/entities/storybook/TimeTable/TimeTableHour.type";
import TimeTableLine from "./TimeTableLine";

const TimeTableHour = (props: TimeTableHourProps) => {
	const { hour, BusTimes } = props;
	return (
		<div className='border-b border-border my-2'>
            <div className="px-8">
                <h3>{hour}時</h3>
                <div className='ml-8 mt-2'>
                    {BusTimes.map((BusTime, i) => {
                        return <TimeTableLine key={i} time={BusTime.time} BusName={BusTime.BusName} />;
                    })}
                </div>
            </div>
		</div>
	);
};

export default TimeTableHour;

