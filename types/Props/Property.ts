import { DataProps, FetchedPropertyDetailsProps } from './Fetch';

export interface PropertyProps {
	property: DataProps;
}

export type PropertyPicProps = Pick<DataProps, 'coverPhoto'>;

export type PropertyContentProps = Omit<DataProps, 'id' | 'externalID'>;

export type PropertyDescriptionProps = Omit<
	DataProps,
	'id' | 'externalID' | 'coverPhoto' | 'title'
>;

export type PropertyVerifiedprops = Pick<DataProps, 'isVerified'>;

export type PropertyPriceProps = Pick<DataProps, 'price' | 'rentFrequency'>;

export type PropertyAvatarProps = Pick<DataProps, 'agency'>;

export type PropertyIconsProps = Pick<DataProps, 'area' | 'rooms' | 'baths'>;

export type PropertyTitleProps = Pick<DataProps, 'title'>;

export type PropertyReviewProps = Pick<
	FetchedPropertyDetailsProps,
	'type' | 'purpose' | 'furnishingStatus'
>;

export type PropertyTypeProps = Pick<FetchedPropertyDetailsProps, 'type'>;

export type PropertyPurposeProps = Pick<FetchedPropertyDetailsProps, 'purpose'>;

export type PropertyFurnishedProps = Pick<
	FetchedPropertyDetailsProps,
	'furnishingStatus'
>;

export type PropertyAmenitiesProps = Pick<
	FetchedPropertyDetailsProps,
	'amenities'
>;
