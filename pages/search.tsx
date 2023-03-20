import SearchInput from '@/components/Search/SearchInput';
import SearchNothingFound from '@/components/Search/SearchNothingFound';
import SearchProperties from '@/components/Search/SearchProperties';
import SearchShowFilters from '@/components/Search/SearchShowFilters';
import SearchTitle from '@/components/Search/SearchTitle';
import { FetchApi } from '@/fetch/FetchApi';
import { DataProps, FetchedListProps } from '@/types/Props/Fetch';
import { InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { FC, useState } from 'react';

const Search: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	properties,
}) => {
	const [input, setInput] = useState<string>('');

	const PropertiesHandler = (): DataProps[] => {
		if (input.trim().length !== 0) {
			return properties.filter((property) =>
				property.title.toLowerCase().includes(input.toLowerCase())
			);
		}
		return properties;
	};

	const SearchedProperties = PropertiesHandler();

	return (
		<>
			<SearchShowFilters />
			<SearchInput setInput={setInput} />
			<SearchTitle />
			<SearchProperties properties={SearchedProperties} />
			<SearchNothingFound properties={SearchedProperties} />
		</>
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

	const data: FetchedListProps = await FetchApi<FetchedListProps>(
		`${process.env.BASE_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
	);

	return {
		props: {
			properties: data.hits,
		},
	};
}

export default Search;
