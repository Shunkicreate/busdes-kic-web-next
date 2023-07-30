import TimeTable from "../TimeTable/TimeTable";
import TimeTableProps from "@/entities/storybook/TimeTable/TimeTable.type";

export default {
	title: "TimeTable",
	component: TimeTable,
};

const DefaultProps: TimeTableProps = {
    fr: "立命館大学",
    to: "京都駅",
    BusStops: ["立命館大学", "京都駅"],
    value: 0,
    OneTimeTable: [
        {
            hour: 0,
            BusTimes: [
                {
                    time: new Date(2021, 0, 1, 0, 0),
                    BusName: "立命館大学行き",
                },
                {
                    time: new Date(2021, 0, 1, 0, 30),
                    BusName: "立命館大学行き",
                },
            ],
        },
        {
            hour: 1,
            BusTimes: [
                {
                    time: new Date(2021, 0, 1, 1, 0),
                    BusName: "立命館大学行き",
                },
                {
                    time: new Date(2021, 0, 1, 1, 30),
                    BusName: "立命館大学行き",
                },
            ],
        },
        {
            hour: 2,
            BusTimes: [
                {
                    time: new Date(2021, 0, 1, 2, 0),
                    BusName: "立命館大学行き",
                },
                {
                    time: new Date(2021, 0, 1, 2, 30),
                    BusName: "立命館大学行き",
                },
            ],
        },
        {
            hour: 3,
            BusTimes: [
                {
                    time: new Date(2021, 0, 1, 3, 0),
                    BusName: "立命館大学行き",
                },
                {
                    time: new Date(2021, 0, 1, 3, 30),
                    BusName: "立命館大学行き",
                },
            ],
        },
    ],
    handleChange: () => {},
    switchBusStop: () => {},
};

export const Default = {
	args: DefaultProps
};

