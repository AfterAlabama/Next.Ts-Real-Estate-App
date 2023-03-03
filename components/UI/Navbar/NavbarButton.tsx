import { MenuButton, IconButton } from '@chakra-ui/react';
import { FcMenu } from 'react-icons/fc';

const NavbarButton = () => {
	return (
		<MenuButton
			as={IconButton}
			icon={<FcMenu />}
			variant='outlined'
			color='red.400'
		/>
	);
};

export default NavbarButton;
