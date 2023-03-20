import { PropertyAmenitiesProps } from '@/types/Props/Property';
import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const PropertyAmenityList: FC<PropertyAmenitiesProps> = ({ amenities }) => {
	const ShowAmenities = amenities.map((item) =>
		item.amenities.map((amenity) => (
			<Text
				fontWeight='bold'
				color='blue.400'
				fontSize='l'
				p='2'
				bg='gray.200'
				m='1'
				borderRadius='5'
				key={amenity.text}
			>
				{amenity.text}
			</Text>
		))
	);

	return <Flex flexWrap='wrap'>{ShowAmenities}</Flex>;
};

export default PropertyAmenityList;
