import Banner from '@/components/Banner';
import Property from '@/components/Property';
import { FetchApi } from '@/fetch/FetchApi';
import { HomeProps } from '@/utils/Props/Generic';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC<HomeProps> = ({ resForRent, resForSale }) => {
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
			<Flex flexWrap='wrap'>
				{resForRent.map((property) => (
					<Property
						key={property.id}
						property={property}
					/>
				))}
			</Flex>
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
			<Flex flexWrap='wrap'>
				{resForSale.map((property) => (
					<Property
						key={property.id}
						property={property}
					/>
				))}
			</Flex>
		</>
	);
};

export const getStaticProps = async () => {
	const resForSale = await FetchApi(
		`${process.env.BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
	);
	const resForRent = await FetchApi(
		`${process.env.BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
	);

	return {
		props: {
			resForSale: resForSale.hits,
			resForRent: resForRent.hits,
		},
	};
};

export default Home;
