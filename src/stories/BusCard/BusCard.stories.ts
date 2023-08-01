import BusCard from "./BusCard";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: "BusCard",
    component: BusCard,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof BusCard>;

const busDataSample = [
    { StartTime: new Date(), EndTime: new Date(), BusName: "50号系統", selected: true },
    { StartTime: new Date(), EndTime: new Date(), BusName: "快速立命館号系統", selected: false },
    { StartTime: new Date(), EndTime: new Date(), BusName: "快速立命館号系統", selected: false },
]

export const Default:Story = {
    args: {
        fr: "立命館大学",
        to: "京都駅",
        BusName: "50号系統",
        BusStop: "1",
        BusData: busDataSample,
    }
}

export const NoBusData:Story = {
    args: {
        fr: "立命館大学",
        to: "京都駅",
        BusName: "50号系統",
        BusStop: "1",
        BusData: [],
    }
}
