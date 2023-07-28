import DisplayTime from "./DisplayTime";

export default {
    title: "DisplayTime",
    component: DisplayTime,
}

export const Default = {
    args: {
        hour: 1,
        minute: 2,
        second: 3,
        millisecond: 46,
        fontSize: "text-4xl"
    }
}

export const NoMillisecond = {
    args: {
        hour: 5,
        minute: 6,
        second: 3,
    }
}

export const NoSecond = {
    args: {
        hour: 4,
        minute: 9,
    }
}

export const NoMinute = {
    args: {
        hour: 6,
    }
}