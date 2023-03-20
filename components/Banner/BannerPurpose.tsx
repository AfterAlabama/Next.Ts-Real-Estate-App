import { BannerPurposeProps } from '@/types/Props/Banner';
import { Text } from '@chakra-ui/react';
import { FC } from 'react';

const BannerPurpose: FC<BannerPurposeProps> = ({ purpose }) => {
	return (
		<>
			<Text
				color='gray.500'
				fontSize='sm'
				fontWeight='medium'
			>
				{purpose}
			</Text>
		</>
	);
};

export default BannerPurpose;
