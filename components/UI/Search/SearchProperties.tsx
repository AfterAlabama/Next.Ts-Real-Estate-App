import Property from '@/components/Property';
import { SearchPropertiesProps } from '@/utils/Props/Search';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

const SearchProperties: FC<SearchPropertiesProps> = ({ properties }) => {
	const ShowProperties = properties.map((property) => (
		<Property
			property={property}
			key={property.id}
		/>
	));

	return <Flex flexWrap='wrap'>{ShowProperties}</Flex>;
};

export default SearchProperties;
