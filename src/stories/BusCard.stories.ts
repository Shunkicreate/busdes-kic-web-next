import BusCard from "./BusCard";

export default {
    title: "BusCard",
    component: BusCard,
}

const busDataSample = [
    { StartTime: new Date(), EndTime: new Date(), BusName: "50号系統", selected: true },
    { StartTime: new Date(), EndTime: new Date(), BusName: "快速立命館号系統", selected: false },
    { StartTime: new Date(), EndTime: new Date(), BusName: "快速立命館号系統", selected: false },
]

export const Default = {
    args: {
        fr: "立命館大学",
        to: "京都駅",
        direction: "50号系統 1番のりば",
        BusData: busDataSample,
    }
}

export const NoBusData = {
    args: {
        fr: "立命館大学",
        to: "京都駅",
        direction: "50号系統 1番のりば",
        BusData: [],
    }
}