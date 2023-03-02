import Banner from '@/components/Banner';

export default function Home() {
	return (
		<>
			<Banner
				purpose='Аренда Квартир'
				firstTitle='Аренда домов для'
				secondTitle='всех желающих'
				firstDescription='Арендуйте квартиры, виллы,'
				secondDescription='апартаменты на любой вкус'
				buttonText='Снять Квартиру'
				link='/search?purpose=для-съема'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
			/>
			<Banner
				purpose='Покупка Квартир'
				firstTitle='Покупка домов для'
				secondTitle='всех желающих'
				firstDescription='Покупайте квартиры, виллы,'
				secondDescription='апартаменты на любой вкус'
				buttonText='Купить Квартиру'
				link='/search?purpose=для-покупки'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
			/>
		</>
	);
}
