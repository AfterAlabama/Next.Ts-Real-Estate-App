import { PropertyPurposeProps } from '@/utils/Props/Property';
import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const PropertyPurpose: FC<PropertyPurposeProps> = ({ purpose }) => {
	const PurposeCondition = purpose === 'for-rent' ? 'Съем' : 'Продажа';

	return (
		<Flex
			justifyContent='space-between'
			w='400px'
			borderBottom='1px'
			borderColor='gray.100'
			p='3'
		>
			<Text>Съем или продажа</Text>
			<Text fontWeight='bold'>{PurposeCondition}</Text>
		</Flex>
	);
};

export default PropertyPurpose;
