import BusCandidateProps from "./BusCandidate.type";
import BusLineAndPickUpPointProps from "./BusLineAndPickUpPoint.type";

interface WaitingAreaProps extends BusLineAndPickUpPointProps{
    BusData: BusCandidateProps[],
}

export default WaitingAreaProps;