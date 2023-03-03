import { Flex, Spacer } from '@chakra-ui/react';
import NavbarLogo from './UI/Navbar/NavbarLogo';
import NavbarMenu from './UI/Navbar/NavbarMenu';

const Navbar = () => {
	return (
		<nav>
			<Flex
				p='2'
				borderBottom='2px'
				borderColor='gray.200'
			>
				<NavbarLogo text='Недвижимость' />
				<Spacer />
				<NavbarMenu />
			</Flex>
		</nav>
	);
};

export default Navbar;
