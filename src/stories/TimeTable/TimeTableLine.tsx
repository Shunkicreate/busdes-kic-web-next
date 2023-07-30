import TimeTableLineProps from "@/entities/storybook/TimeTable/TimeTableLine.type";
import DisplayTime from "../DisplayTime/DisplayTime";

const TimeTableLine = (props: TimeTableLineProps) => {
    const { time, BusName } = props;
    return(
        <div className="flex my-1">
            <DisplayTime hour={time.getHours()} minute={time.getMinutes()} twStyle="pr-6"/><div>{BusName}</div>
        </div>
    )
};

export default TimeTableLine;
