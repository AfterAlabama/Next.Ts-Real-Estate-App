import { BannerDescriptionProps } from '@/types/Props/Banner';
import { Text } from '@chakra-ui/react';
import { FC } from 'react';

const BannerDescription: FC<BannerDescriptionProps> = ({
	firstDescription,
	secondDescription,
}) => {
	return (
		<>
			<Text
				fontSize='lg'
				color='gray.700'
				paddingTop='3'
				paddingBottom='3'
			>
				{firstDescription} <br /> {secondDescription}
			</Text>
		</>
	);
};

export default BannerDescription;
