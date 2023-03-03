import { NavbarListItemProps } from '@/utils/Props/Navbar';
import { MenuItem } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const NavbarListItem: FC<NavbarListItemProps> = ({ href, icon, text }) => {
	return (
		<Link
			href={href}
			passHref
		>
			<MenuItem icon={icon}>{text}</MenuItem>
		</Link>
	);
};

export default NavbarListItem;
