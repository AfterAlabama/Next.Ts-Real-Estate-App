export interface DataProps {
	id: number;
	externalID: string;
	coverPhoto: {
		url: string;
	};
	price: number;
	rentFrequency: string;
	rooms: number;
	title: string;
	baths: number;
	area: number;
	agency: {
		logo: {
			url: string;
		};
	};
	isVerified: boolean;
}

export interface fetchedListProps {
	hits: DataProps[];
}
