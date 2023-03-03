import { PropertyVerifiedprops } from '@/utils/Props/Property';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { GoVerified } from 'react-icons/go';

const PropertyVerified: FC<PropertyVerifiedprops> = ({ isVerified }) => {
	return (
		<Box
			paddingRight='3'
			color='green.400'
		>
			{isVerified && <GoVerified />}
		</Box>
	);
};

export default PropertyVerified;
