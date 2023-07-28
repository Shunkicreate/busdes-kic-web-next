import DisplayTimeProps from "@/entities/storybook/DisplayTime/DisplayTime.type";

const DisplayTime = (props: DisplayTimeProps) => {
	const { hour, minute, second, millisecond, twStyle } = props;
	const makePadZero = (num: number) => {
        if (num < 0) return "00";
		return num.toString().padStart(2, "0");
	};
	const addColon = (num: number | undefined) => {
		return num ? ":" : "";
	};
	const addComma = (num: number | undefined) => {
		return num ? "." : "";
	};

	return (
		<div className={`${twStyle}`}>
			<span>{hour !== undefined ? makePadZero(hour) + addColon(minute) : <></>}</span>
			<span>{minute !== undefined ? makePadZero(minute) + addColon(second) : <></>}</span>
			<span>{second !== undefined ? makePadZero(second) + addComma(millisecond) : <></>}</span>
			<span>{millisecond !== undefined ? makePadZero(millisecond) : <></>}</span>
		</div>
	);
};

export default DisplayTime;

