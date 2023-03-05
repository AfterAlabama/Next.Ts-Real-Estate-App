import { filterData, getFilterValues } from '@/utils/filterData';
import { Box, Flex, Select } from '@chakra-ui/react';
import router from 'next/router';
import { useState } from 'react';

const SearchFilters = () => {
	const [filters, setFilters] = useState(filterData);

	const searchProperties = (filterValues: {[key: string] : string}) => {
		const path = router.pathname;
		const query = router.query;

		const values = getFilterValues(filterValues);

		values.forEach(item => {
			query[item.name] = item.value
		});

		router.push({pathname: path, query})
	}

	const ShowFilters = filters.map((filter) => (
		<Box key={filter.queryName}>
			<Select
				w='fit-content'
				p='2'
				placeholder={filter.placeholder}
				onChange={e => searchProperties({[filter.queryName]:e.target.value})}
			>
				{filter.items.map((item) => (
					<option
						value={item.value}
						key={item.value}
					>
						{item.name}
					</option>
				))}
			</Select>
		</Box>
	));

	return (
		<Flex
			bg='gray.100'
			p='4'
			justifyContent='center'
			flexWrap='wrap'
		>
			{ShowFilters}
		</Flex>
	);
};

export default SearchFilters;
