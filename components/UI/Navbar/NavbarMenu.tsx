import { Box, Menu, MenuList } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FcHome, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
import NavbarButton from './NavbarButton';
import NavbarListItem from './NavbarListItem';

const NavbarMenu = () => {
	return (
		<Box>
			<Menu>
				<NavbarButton />
				<MenuList>
					<NavbarListItem
						href='/'
						icon={<FcHome />}
						text='Главная'
					/>
					<NavbarListItem
						href='/search'
						icon={<BsSearch />}
						text='Поиск'
					/>
					<NavbarListItem
						href='/search?purpose=for-sale'
						icon={<FcAbout />}
						text='Купить недвижимость'
					/>
					<NavbarListItem
						href='/search?purpose=for-rent'
						icon={<FiKey />}
						text='Снять недвижимость'
					/>
				</MenuList>
			</Menu>
		</Box>
	);
};

export default NavbarMenu;
