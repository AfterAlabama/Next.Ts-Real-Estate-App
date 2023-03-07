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

export interface PropertyDetailsProps {
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
	id: number;
	description: string;
	type: string;
	purpose: string;
	furnishingStatus: string;
	amenities: [
		{amenities: [
			{text:string}
		]}
	];
	photos: [{ id: string; url: string }];
}
