type BusCandidateProps = {
	StartTime: Date;
	EndTime: Date;
	BusName: string;
	selected: boolean;
    onClick?: () => void;
};

export default BusCandidateProps;