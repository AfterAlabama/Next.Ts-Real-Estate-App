import { PropertyVerifiedprops } from '@/types/Props/Property';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { GoVerified } from 'react-icons/go';

const PropertyVerified: FC<PropertyVerifiedprops> = ({ isVerified }) => {
	const isVerifiedCondition = isVerified ? <GoVerified /> : <></>;

	return (
		<Box
			paddingRight='3'
			color='green.400'
		>
			{isVerifiedCondition}
		</Box>
	);
};

export default PropertyVerified;
