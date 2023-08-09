import BusStopSelectBoxProps from "@/entities/storybook/TimeTable/BusStopSelectBox.type";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const BusStopSelectBox = (props: BusStopSelectBoxProps) => {
	const { BusStops, value, handleChange } = props;
	return (
		<div className='w-full'>
			<Box sx={{ width: "100%" }}>
				<Tabs
					value={value}
					onChange={(e, newTab) => handleChange(newTab)}
					variant='scrollable'
					allowScrollButtonsMobile
					sx={{
					".MuiTabs-indicator": {
						backgroundColor: "#373737",
					},	
					}}
				>
					{BusStops.map((BusStop, i) => {
						return (
							<Tab
								label={BusStop}
								key={i}
								value={i}
								disableRipple
								sx={{
									color: "#0000008a",
									fontWeight: "bolder",
									"&.Mui-selected": {
										color: "#000",
									},
								}}
							/>
						);
					})}
				</Tabs>
			</Box>
		</div>
	);
};
export default BusStopSelectBox;

