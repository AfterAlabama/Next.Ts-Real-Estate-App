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

export type BannerContentProps = Omit<BannerProps, 'imageUrl'>;

export type BannerPicProps = Pick<BannerProps, 'imageUrl'>;

export type BannerPurposeProps = Pick<BannerProps, 'purpose'>;

export type BannerTitleProps = Pick<BannerProps, 'firstTitle' | 'secondTitle'>;

export type BannerDescriptionProps = Pick<
	BannerProps,
	'firstDescription' | 'secondDescription'
>;

export type BannerButtonProps = Pick<BannerProps, 'link' | 'buttonText'>;
