import { PropertyFurnishedProps } from '@/utils/Props/Property';
import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const PropertyFurnished: FC<PropertyFurnishedProps> = ({
	furnishingStatus,
}) => {
	const FurnishedCondition =
		furnishingStatus === 'furnished' ? 'С Мебелью' : 'Без Мебели';

	return (
		<Flex
			justifyContent='space-between'
			w='400px'
			borderBottom='1px'
			borderColor='gray.100'
			p='3'
		>
			<Text>С Мебелью Или Без</Text>
			<Text fontWeight='bold'>{FurnishedCondition}</Text>
		</Flex>
	);
};

export default PropertyFurnished;
