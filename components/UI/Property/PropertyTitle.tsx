import { PropertyTitleProps } from '@/utils/Props/Property';
import { Text } from '@chakra-ui/react';
import { FC } from 'react';

const PropertyTitle: FC<PropertyTitleProps> = ({ title }) => {
	const titleCondition =
		title.length > 30 ? `${title.substring(0, 30)}...` : title;

	return <Text fontSize='lg'>{titleCondition}</Text>;
};

export default PropertyTitle;
