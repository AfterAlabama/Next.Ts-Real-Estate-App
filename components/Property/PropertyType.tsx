import { PropertyTypeProps } from '@/types/Props/Property';
import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const PropertyType: FC<PropertyTypeProps> = ({ type }) => {
	const TypeCondition = type && 'Недвижимость';

	return (
		<Flex
			justifyContent='space-between'
			w='400px'
			borderBottom='1px'
			borderColor='gray.100'
			p='3'
		>
			<Text>Тип</Text>
			<Text fontWeight='bold'>{TypeCondition}</Text>
		</Flex>
	);
};

export default PropertyType;
