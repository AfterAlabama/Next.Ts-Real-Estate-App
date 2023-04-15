import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const SearchTitle = () => {
	const router = useRouter();

	const PurposeCondition =
		router.query.purpose === 'for-rent' ? 'Для Съема' : 'Для Продажи'
	;

	return (
		<Text
			fontSize='2xl'
			p='4'
			fontWeight='bold'
		>
			Недвижимость {PurposeCondition}
		</Text>
	);
};

export default SearchTitle;
