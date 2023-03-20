import { Flex, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from './SearchFilters';

const SearchShowFilters = () => {
	const [searchFilters, setSearchFilters] = useState<boolean>(false);

	const SearchCondition = searchFilters && <SearchFilters />;

	return (
		<>
			<Flex
				cursor='pointer'
				bg='gray.100'
				borderBottom='1px'
				borderColor='gray.200'
				p='2'
				fontWeight='black'
				fontSize='lg'
				justifyContent='center'
				alignItems='center'
				onClick={() => setSearchFilters((prev) => !prev)}
			>
				<Text>Поиск Недвижимости По Условиям</Text>
				<Icon
					paddingLeft='2'
					w='7'
					as={BsFilter}
				/>
			</Flex>
			{SearchCondition}
		</>
	);
};

export default SearchShowFilters;
