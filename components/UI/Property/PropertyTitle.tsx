import { PropertyTitleProps } from '@/utils/Props/Property';
import { Text } from '@chakra-ui/react';
import { FC } from 'react';

const PropertyTitle: FC<PropertyTitleProps> = ({ title }) => {
	return <Text fontSize='lg'>{title}</Text>;
};

export default PropertyTitle;
