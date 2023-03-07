import { PropertyAmenitiesProps } from '@/utils/Props/Property';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import PropertyAmenityList from './PropertyAmenityList';

const PropertyAmenities: FC<PropertyAmenitiesProps> = ({ amenities }) => {
	const AmenitiesCondition = amenities.length && (
		<Text
			fontSize='2xl'
			fontWeight='black'
			marginTop='5'
		>
			Удобства
		</Text>
	);

	return (
		<Box>
			{AmenitiesCondition}
			<PropertyAmenityList amenities={amenities} />
		</Box>
	);
};

export default PropertyAmenities;
