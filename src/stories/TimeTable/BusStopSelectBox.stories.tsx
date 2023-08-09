import BusStopSelectBoxProps from "@/entities/storybook/TimeTable/BusStopSelectBox.type";
import BusStopSelectBox from "./BusStopSelectBox";
import { userEvent, within } from "@storybook/testing-library";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
const meta: Meta<BusStopSelectBoxProps> = {
	component: BusStopSelectBox,
	title: "BusStopSelectBox",
	args: {
		BusStops: ["立命館大学前1", "立命館大学前2", "立命館大学前3", "立命館大学前4"],
		value: 0,
		handleChange: () => {},
	},
};

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default meta;

type Story = StoryObj<BusStopSelectBoxProps>;

export const OnClick: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		userEvent.click(canvas.getByText("立命館大学前1"));
		await sleep(1000);
		userEvent.click(canvas.getByText("立命館大学前1"));
	},
};

export const Prod: Story = {
	args: {
		BusStops: ["立命館大学前1", "立命館大学前2", "立命館大学前3", "立命館大学前4"],
	},
	render: (args) => {
		const { BusStops } = args;
		const [value, setValue] = useState(0);
		return <BusStopSelectBox BusStops={BusStops} value={value} handleChange={setValue} />;
	},
};

