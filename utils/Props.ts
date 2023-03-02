import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface BannerProps {
	purpose: string;
	firstTitle: string;
	secondTitle: string;
	firstDescription: string;
	secondDescription: string;
	buttonText: string;
	link: string;
	imageUrl: string;
}

export interface DataProps {
	id:number;
	externalID: string;
	coverPhoto: {
		url: string
	};
	price:number;
	rentFrequency:string;
	rooms: number; 
	title: string; 
	baths: number;
	area: number ;
	agency: {
		logo: {
			url: string
		}
	}
	isVerified: boolean
}

export interface fetchedListProps {
	hits: DataProps[]
}

export interface HomeProps {
	resForRent: DataProps[]
	resForSale: DataProps[]
}

export interface PropertyProps {
	property: DataProps;
}

export interface ChildrenOnlyProps {
	children: ReactNode
}
