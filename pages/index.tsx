import Banner from '@/components/Banner/Banner';
import Property from '@/components/Property/Property';
import { FetchApi } from '@/fetch/FetchApi';
import { FetchedListProps } from '@/types/Props/Fetch';
import { Flex } from '@chakra-ui/react';
import { InferGetStaticPropsType } from 'next';
import { FC } from 'react';

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	resForRent,
	resForSale,
}) => {
	const ShowRentPics = resForRent.map((property) => (
		<Property
			key={property.id}
			property={property}
		/>
	));

	const ShowSalePics = resForSale.map((property) => (
		<Property
			key={property.id}
			property={property}
		/>
	));

	return (
		<>
			<Banner
				purpose='Аренда Квартир'
				firstTitle='Аренда домов для'
				secondTitle='всех желающих'
				firstDescription='Арендуйте квартиры, виллы,'
				secondDescription='апартаменты на любой вкус'
				buttonText='Снять Квартиру'
				link='/search?purpose=for-rent'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
			/>
			<Flex flexWrap='wrap'>{ShowRentPics}</Flex>
			<Banner
				purpose='Покупка Квартир'
				firstTitle='Покупка домов для'
				secondTitle='всех желающих'
				firstDescription='Покупайте квартиры, виллы,'
				secondDescription='апартаменты на любой вкус'
				buttonText='Купить Квартиру'
				link='/search?purpose=for-sale'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
			/>
			<Flex flexWrap='wrap'>{ShowSalePics}</Flex>
		</>
	);
};

export const getStaticProps = async () => {
	const resForSale: FetchedListProps = await FetchApi<FetchedListProps>(
		`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
	);
	const resForRent: FetchedListProps = await FetchApi<FetchedListProps>(
		`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
	);

	return {
		props: {
			resForSale: resForSale.hits,
			resForRent: resForRent.hits,
		},
	};
};

export default Home;
