import BusStopSelectBox from "./BusStopSelectBox";

export default {
	title: "BusStopSelectBox",
	component: BusStopSelectBox,
};

export const Default = {
	args: {
		BusStops: ["立命館大学前", "立命館大学前", "立命館大学前", "立命館大学前"],
		value: 0,
		handleChange: () => {},
	},
};

