import { PropertyDescriptionProps } from '@/types/Props/Property';
import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import PropertyAvatar from './PropertyAvatar';
import PropertyIcons from './PropertyIcons';
import PropertyPrice from './PropertyPrice';
import PropertyVerified from './PropertyVerified';

const PropertyDescription: FC<PropertyDescriptionProps> = ({
	isVerified,
	price,
	rentFrequency,
	agency,
	rooms,
	baths,
	area,
}) => {
	return (
		<Box w='full'>
			<Flex
				paddingTop='2'
				alignItems='center'
				justifyContent='space-between'
			>
				<Flex alignItems='center'>
					<PropertyVerified isVerified={isVerified} />
					<PropertyPrice
						price={price}
						rentFrequency={rentFrequency}
					/>
				</Flex>
				<PropertyAvatar agency={agency} />
			</Flex>
			<PropertyIcons
				area={area}
				baths={baths}
				rooms={rooms}
			/>
		</Box>
	);
};

export default PropertyDescription;
