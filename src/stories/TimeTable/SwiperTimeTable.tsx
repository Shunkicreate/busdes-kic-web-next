"use client";
import SwiperTimeTableProps from "@/entities/storybook/TimeTable/SwiperTimeTable.type";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import TimeTableHours from "./TimeTableHours";
import { useRef } from "react";

const SwiperTimeTable = (props: SwiperTimeTableProps) => {
	const { TimeTableData } = props;
	const timetableRefs = useRef<HTMLDivElement[]>([]);
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
		>
			{TimeTableData.map((TimeTable, i) => {
				const OneTimeTable = TimeTable.OneTimeTable;
				return (
					<SwiperSlide key={i}>
						<div
							ref={(el) => {
								if (el) {
									timetableRefs.current[i] = el;
								}
							}}
						>
							<TimeTableHours OneTimeTable={OneTimeTable} />
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default SwiperTimeTable;

