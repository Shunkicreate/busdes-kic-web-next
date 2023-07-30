import BusStopSelectBoxProps from "@/entities/storybook/TimeTable/BusStopSelectBox.type";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const BusStopSelectBox = (props: BusStopSelectBoxProps) => {
	const { BusStops, value, handleChange } = props;
	return (
		<div className='bg-main w-full'>
			<Box sx={{ width: "100%", indicatorColor: "#FFE600", color: "#FFE600", fontWeight: "bolder" }}>
				<Tabs
					value={value}
					onChange={(e, newTab) => handleChange(newTab)}
					TabIndicatorProps={{ style: { backgroundColor: "#000" } }}
					variant='scrollable'
					allowScrollButtonsMobile
					sx={{
						color: "#000",
						fontWeight: "bolder",
					}}
				>
					{BusStops.map((BusStop, i) => {
						return (
							<Tab
								label={BusStop}
								key={i}
								value={i}
								sx={{
									color: "#0000004d",
									fontWeight: "bolder",
									"&.Mui-selected": {
										color: "#000",
										borderColor: "transparent",
									},
								}}
							></Tab>
						);
					})}
				</Tabs>
			</Box>
		</div>
	);
};

export default BusStopSelectBox;

