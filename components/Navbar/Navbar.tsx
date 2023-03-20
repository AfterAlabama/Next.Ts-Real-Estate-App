import { Flex, Spacer } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FcAbout, FcHome } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
	//Количество Навигационных Страниц
	const NavbarList = [
		{
			href: '/',
			icon: <FcHome />,
			text: 'Главная',
		},
		{
			href: '/search',
			icon: <BsSearch />,
			text: 'Поиск',
		},
		{
			href: '/search?purpose=for-sale',
			icon: <FcAbout />,
			text: 'Купить недвижимость',
		},
		{
			href: '/search?purpose=for-rent',
			icon: <FiKey />,
			text: 'Снять недвижимость',
		},
	];

	return (
		<nav>
			<Flex
				p='2'
				borderBottom='2px'
				borderColor='gray.200'
			>
				<NavbarLogo text='Недвижимость' />
				<Spacer />
				<NavbarMenu NavbarList={NavbarList} />
			</Flex>
		</nav>
	);
};

export default Navbar;
