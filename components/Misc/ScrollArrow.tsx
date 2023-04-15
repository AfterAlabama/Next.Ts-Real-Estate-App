import { Flex, Icon } from '@chakra-ui/react';
import { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export const LeftScrollArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			marginRight='1'
		>
			<Icon
				as={FaArrowCircleLeft}
				fontSize='2xl'
				cursor='pointer'
				onClick={() => scrollPrev()}
			/>
		</Flex>
	);
};

export const RightScrollArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);
	
	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			marginRight='1'
		>
			<Icon
				as={FaArrowCircleRight}
				fontSize='2xl'
				cursor='pointer'
				onClick={() => scrollNext()}
			/>
		</Flex>
	);
};
