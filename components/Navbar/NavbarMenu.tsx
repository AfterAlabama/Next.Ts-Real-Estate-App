import { Box, Menu, MenuList } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FcHome, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
import NavbarButton from './NavbarButton';
import NavbarListItem from './NavbarListItem';

const NavbarMenu = () => {
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

	const ShowNavbarListItems = NavbarList.map((item) => (
		<NavbarListItem
			key={item.href}
			href={item.href}
			icon={item.icon}
			text={item.text}
		/>
	));

	return (
		<Box>
			<Menu>
				<NavbarButton />
				<MenuList>{ShowNavbarListItems}</MenuList>
			</Menu>
		</Box>
	);
};

export default NavbarMenu;
