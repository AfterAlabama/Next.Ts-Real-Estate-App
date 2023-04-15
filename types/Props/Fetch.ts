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

export interface FetchedListProps {
	hits: DataProps[];
}

export interface FetchedPropertyDetailsProps
	extends Omit<DataProps, 'coverPhoto' | 'externalID'> {
	type: string;
	description: string;
	purpose: string;
	furnishingStatus: string;
	amenities: [{ amenities: [{ text: string }] }];
	photos: [{ id: string; url: string }];
}
