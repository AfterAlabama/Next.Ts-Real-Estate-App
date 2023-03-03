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

export interface BannerContentProps {
	purpose: string;
	firstTitle: string;
	secondTitle: string;
	firstDescription: string;
	secondDescription: string;
	buttonText: string;
	link: string;
}

export interface BannerPicProps {
	imageUrl: string;
}

export interface BannerPurposeProps {
	purpose: string;
}

export interface BannerTitleProps {
	firstTitle: string;
	secondTitle: string;
}

export interface BannerDescriptionProps {
	firstDescription: string;
	secondDescription: string;
}

export interface BannerButtonProps {
	link: string;
	buttonText: string;
}
