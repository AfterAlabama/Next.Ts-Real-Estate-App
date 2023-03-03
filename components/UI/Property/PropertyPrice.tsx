import { PropertyPriceProps } from '@/utils/Props/Property';
import { Text } from '@chakra-ui/react';
import millify from 'millify';
import { FC } from 'react';

const PropertyPrice: FC<PropertyPriceProps> = ({ price, rentFrequency }) => {
	const rentCondition = 'monthly' ? 'Ежемесячно' : 'Ежегодно';
	return (
		<Text
			fontWeight='bold'
			fontSize='lg'
		>
			Цена ${millify(price)}
			{rentFrequency && `/${rentCondition}`}
		</Text>
	);
};

export default PropertyPrice;
