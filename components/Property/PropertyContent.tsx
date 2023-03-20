import { PropertyContentProps } from '@/types/Props/Property';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import PropertyDescription from './PropertyDescription';
import PropertyPic from './PropertyPic';
import PropertyTitle from './PropertyTitle';

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
	const titleCondition =
		title.length > 30 ? `${title.substring(0, 30)}...` : title;
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
				area={area}
			/>
			<PropertyTitle title={titleCondition} />
		</Flex>
	);
};

export default PropertyContent;
