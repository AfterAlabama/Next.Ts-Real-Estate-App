import { BannerContentProps } from '@/types/Props/Banner';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import BannerButton from './BannerButton';
import BannerDescription from './BannerDescription';
import BannerPurpose from './BannerPurpose';
import BannerTitle from './BannerTitle';

const BannerContent: FC<BannerContentProps> = ({
	purpose,
	firstTitle,
	secondTitle,
	firstDescription,
	secondDescription,
	link,
	buttonText,
}) => {
	return (
		<Box p='5'>
			<BannerPurpose purpose={purpose} />
			<BannerTitle
				firstTitle={firstTitle}
				secondTitle={secondTitle}
			/>
			<BannerDescription
				firstDescription={firstDescription}
				secondDescription={secondDescription}
			/>
			<BannerButton
				link={link}
				buttonText={buttonText}
			/>
		</Box>
	);
};

export default BannerContent;
