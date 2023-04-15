import { SearchPropertiesProps } from '@/types/Props/Search';
import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const SearchNothingFound: FC<SearchPropertiesProps> = ({ properties }) => {
	const NotFound = properties.length === 0 ? (
		<Flex
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			marginTop='5'
			marginBottom='5'
		>
			<Text fontSize='3xl'>Ничего Не Найдено</Text>
		</Flex>
	) : <></>;

	return <>{NotFound}</>;
};

export default SearchNothingFound;
