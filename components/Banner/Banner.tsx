import { BannerProps } from '@/types/Props/Banner';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import BannerContent from './BannerContent';
import BannerPic from './BannerPic';

const Banner: FC<BannerProps> = ({
	imageUrl,
	purpose,
	firstTitle,
	secondTitle,
	firstDescription,
	secondDescription,
	link,
	buttonText,
}) => {
	return (
		<Flex
			flexWrap='wrap'
			justifyContent='center'
			alignItems='center'
			m='10'
		>
			<BannerPic imageUrl={imageUrl} />
			<BannerContent
				purpose={purpose}
				firstTitle={firstTitle}
				secondTitle={secondTitle}
				firstDescription={firstDescription}
				secondDescription={secondDescription}
				link={link}
				buttonText={buttonText}
			/>
		</Flex>
	);
};

export default Banner;
