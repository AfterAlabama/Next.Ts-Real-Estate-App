import { useDebounce } from '@/hooks/useDebounce';
import { SearchInputProps } from '@/types/Props/Search';
import { Flex, FormLabel, Input } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

const SearchInput: FC<SearchInputProps> = ({ setInput }) => {
	const [inputValue, setInputValue] = useState<string>('');

	const inputHandler = (val: string) => {
		setInputValue(val);
	};

	const debouncedInputHandler = useDebounce(inputHandler, 500);

	useEffect(() => {
		setInput(inputValue);
	}, [inputValue]);

	return (
		<Flex
			paddingTop='2'
			paddingBottom='4'
			flexDirection='column'
		>
			<FormLabel fontSize='lg'>Поиск По Названию</FormLabel>
			<Input
				placeholder='поиск...'
				size='sm'
				width={300}
				onChange={(e) => debouncedInputHandler(e.target.value)}
			/>
		</Flex>
	);
};

export default SearchInput;
