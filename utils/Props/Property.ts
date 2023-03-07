import { DataProps } from './Fetch';

export interface PropertyProps {
	property: DataProps;
}

export interface PropertyPicProps {
	coverPhoto: {
		url: string;
	};
}

export interface PropertyContentProps {
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

export interface PropertyDescriptionProps {
	price: number;
	rentFrequency: string;
	rooms: number;
	baths: number;
	area: number;
	agency: {
		logo: {
			url: string;
		};
	};
	isVerified: boolean;
}

export interface PropertyVerifiedprops {
	isVerified: boolean;
}

export interface PropertyPriceProps {
	price: number;
	rentFrequency: string;
}

export interface PropertyAvatarProps {
	agency: {
		logo: {
			url: string;
		};
	};
}

export interface PropertyIconsProps {
	area: number;
	rooms: number;
	baths: number;
}

export interface PropertyTitleProps {
	title: string;
}

export interface ImageScrollBarProps {
	data: [
		{
			id: string;
			url: string;
		}
	];
}

export interface PropertyReviewProps {
	type: string;
	purpose: string;
	furnishingStatus: string;
}

export interface PropertyTypeProps {
	type: string;
}

export interface PropertyPurposeProps {
	purpose: string;
}

export interface PropertyFurnishedProps {
	furnishingStatus: string;
}

export interface PropertyAmenitiesProps {
	amenities: [{ amenities: [{ text: string }] }];
}
