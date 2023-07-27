type WaitingAreaProps = {
    direction: string,
    BusData: ApproachingBusData[],
}

type ApproachingBusData = {
    StartTime: Date,
    EndTime: Date,
    BusName: string,
    selected: boolean,

}

export default WaitingAreaProps;