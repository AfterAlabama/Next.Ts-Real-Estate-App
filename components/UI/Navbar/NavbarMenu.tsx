import { NavbarListProps } from '@/utils/Props/Navbar';
import { Box, Menu, MenuList } from '@chakra-ui/react';
import { FC } from 'react';
import NavbarButton from './NavbarButton';
import NavbarListItem from './NavbarListItem';

const NavbarMenu: FC<NavbarListProps> = ({ NavbarList }) => {
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
