import TimeTableLineProps from "@/entities/storybook/TimeTable/TimeTableLine.type";
import DisplayTime from "../DisplayTime/DisplayTime";

const TimeTableLine = (props: TimeTableLineProps) => {
    const { time, BusName } = props;
    return(
        <div className="flex">
            <DisplayTime hour={time.getHours()} minute={time.getMinutes()}/><div>{BusName}</div>
        </div>
    )
};

export default TimeTableLine;
