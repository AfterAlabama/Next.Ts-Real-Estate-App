import { Flex, Spacer } from '@chakra-ui/react';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
	return (
		<Flex
			p='2'
			borderBottom='2px'
			borderColor='gray.200'
		>
			<NavbarLogo text='Недвижимость' />
			<Spacer />
			<NavbarMenu />
		</Flex>
	);
};

export default Navbar;
