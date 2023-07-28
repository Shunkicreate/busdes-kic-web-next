import BusLineAndPickUpPointProps from "./BusLineAndPickUpPoint.type";

interface WaitingAreaProps extends BusLineAndPickUpPointProps{
    BusData: ApproachingBusData[],
}

type ApproachingBusData = {
    StartTime: Date,
    EndTime: Date,
    BusName: string,
    selected: boolean,

}

export default WaitingAreaProps;