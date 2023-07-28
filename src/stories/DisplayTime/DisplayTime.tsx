import DisplayTimeProps from "@/entities/storybook/DisplayTime/DisplayTime.type";

const DisplayTime = (props: DisplayTimeProps) => {
	const { hour, minute, second, millisecond, fontSize } = props;
	const makePadZero = (num: number) => {
		return num.toString().padStart(2, "0");
	};
	const addColon = (num: number | undefined) => {
		return num ? ":" : "";
	};
	const addComma = (num: number | undefined) => {
		return num ? "." : "";
	};

	return (
		<div className={`${fontSize}`}>
			<span>{hour ? makePadZero(hour) + addColon(minute) : <></>}</span>
			<span>{minute ? makePadZero(minute) + addColon(second) : <></>}</span>
			<span>{second ? makePadZero(second) + addComma(millisecond) : <></>}</span>
			<span>{millisecond ? makePadZero(millisecond) : <></>}</span>
		</div>
	);
};

export default DisplayTime;

