import { BannerTitleProps } from '@/types/Props/Banner';
import { Text } from '@chakra-ui/react';
import { FC } from 'react';

const BannerTitle: FC<BannerTitleProps> = ({ firstTitle, secondTitle }) => {
	return (
		<>
			<Text
				fontSize='3xl'
				fontWeight='bold'
			>
				{firstTitle} <br /> {secondTitle}
			</Text>
		</>
	);
};

export default BannerTitle;
