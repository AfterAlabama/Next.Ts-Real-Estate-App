import Property from '@/components/Property';
import SearchFilters from '@/components/SearchFilters';
import { FetchApi } from '@/fetch/FetchApi';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';

const Search = ({
	properties,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [searchFilters, setSearchFilters] = useState<boolean>(false);

	const router = useRouter();

	const SearchCondition = searchFilters && <SearchFilters />;

	const PurposeCondition =
		router.query.purpose === 'for-rent' ? 'Для Съема' : 'Для Продажи';

	const ShowProperties = properties.map((property) => (
		<Property
			property={property}
			key={property.id}
		/>
	));

	const NotFound = properties.length === 0 && (
		<Flex
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			marginTop='5'
			marginBottom='5'
		>
			<Text fontSize='3xl'>Ничего Не Найдено</Text>
		</Flex>
	);

	return (
		<Box>
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
				<Text>Поиск Квартир По Условиям</Text>
				<Icon
					paddingLeft='2'
					w='7'
					as={BsFilter}
				/>
			</Flex>
			{SearchCondition}
			<Text
				fontSize='2xl'
				p='4'
				fontWeight='bold'
			>
				Квартиры {PurposeCondition}
			</Text>
			<Flex flexWrap='wrap'>{ShowProperties}</Flex>
			{NotFound}
		</Box>
	);
};

export async function getServerSideProps({ query }: { query: ParsedUrlQuery }) {
	const purpose = query.purpose || 'for-rent';
	const rentFrequency = query.rentFrequency || 'yearly';
	const minPrice = query.minPrice || '0';
	const maxPrice = query.maxPrice || '1000000';
	const roomsMin = query.roomsMin || '0';
	const bathsMin = query.bathsMin || '0';
	const sort = query.sort || 'price-desc';
	const areaMax = query.areaMax || '35000';
	const locationExternalIDs = query.locationExternalIDs || '5002';
	const categoryExternalID = query.categoryExternalID || '4';

	const data = await FetchApi(
		`${process.env.BASE_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
	);

	return {
		props: {
			properties: data.hits,
		},
	};
}

export default Search;
