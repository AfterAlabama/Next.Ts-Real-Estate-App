import { PropertyPriceProps } from '@/types/Props/Property';
import { Text } from '@chakra-ui/react';
import millify from 'millify';
import { FC } from 'react';

const PropertyPrice: FC<PropertyPriceProps> = ({ price, rentFrequency }) => {
	const rentCondition = (frequency: string) => {
		if (frequency === 'monthly') {
			return 'Ежемесячно';
		}
		if (frequency === 'yearly') {
			return 'Ежегодно';
		}
		if (frequency === 'daily') {
			return 'Ежедневно';
		}

		return 'Еженедельно';
	};
	const priceCondition = rentFrequency ? `/${rentCondition(rentFrequency)}` : '';

	return (
		<Text
			fontWeight='bold'
			fontSize='lg'
		>
			Цена ${millify(price)}
			{priceCondition}
		</Text>
	);
};

export default PropertyPrice;
