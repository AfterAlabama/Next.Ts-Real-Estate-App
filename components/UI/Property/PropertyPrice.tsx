import { PropertyPriceProps } from '@/utils/Props/Property';
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
		if (frequency === 'weekly') {
			return 'Еженедельно';
		}
		if (frequency === 'daily') {
			return 'Ежедневно';
		}
	};

	return (
		<Text
			fontWeight='bold'
			fontSize='lg'
		>
			Цена ${millify(price)}
			{rentFrequency && `/${rentCondition(rentFrequency)}`}
		</Text>
	);
};

export default PropertyPrice;
