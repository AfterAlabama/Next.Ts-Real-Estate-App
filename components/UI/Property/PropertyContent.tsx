import { PropertyContentProps } from '@/utils/Props/Property';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import PropertyDescription from './PropertyDescription';
import PropertyPic from './PropertyPic';

const PropertyContent: FC<PropertyContentProps> = ({
	coverPhoto,
	isVerified,
	price,
	rentFrequency,
	agency,
	rooms,
	baths,
	title,
	area,
}) => {
	return (
		<Flex
			flexWrap='wrap'
			w='420px'
			p='5'
			paddingTop='0'
			cursor='pointer'
			justifyContent='flex-start'
		>
			<PropertyPic coverPhoto={coverPhoto} />
			<PropertyDescription
				isVerified={isVerified}
				price={price}
				rentFrequency={rentFrequency}
				agency={agency}
				rooms={rooms}
				baths={baths}
				title={title}
				area={area}
			/>
		</Flex>
	);
};

export default PropertyContent;
