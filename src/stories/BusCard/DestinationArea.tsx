"use client"
import DestinationAreaProps from "@/entities/storybook/DestinationArea.type";
import Image from "next/image";
import { memo, useState } from "react";

const DestinationArea = memo((props: DestinationAreaProps) => {
	const { fr, to } = props;
	const [showAllBusStopsParams, setShowAllBusStopsParams] = useState<"line-clamp-2" | null>("line-clamp-2");

	const switchShow = () => {
		if (!showAllBusStopsParams) {
			setShowAllBusStopsParams("line-clamp-2");
		} else {
			setShowAllBusStopsParams(null);
		}
	};
	return (
		<button onClick={switchShow} className="w-full">
			<div className='grid grid-cols-7 gap-2 min-h-[4rem] h-fit place-content-center text-center'>
				<h2 className={"text-xl col-span-3 my-auto break-all " + showAllBusStopsParams}>{fr}</h2>
				<Image className='m-auto' src={"/images/arrayVector.svg"} alt='array vector image' width={40} height={5.5} />
				<h2 className={"text-xl col-span-3 my-auto break-all " + showAllBusStopsParams}>{to}</h2>
			</div>
			<div className='border border-stone-300'></div>
		</button>
	);
});

export default DestinationArea;

