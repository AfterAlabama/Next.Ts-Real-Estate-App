import { NavbarLogoProps } from '@/types/Props/Navbar';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const NavbarLogo: FC<NavbarLogoProps> = ({ text }) => {
	return (
		<Box
			fontSize='3xl'
			color='blue.400'
			fontStyle='bold'
		>
			<Link href='/'>{text}</Link>
		</Box>
	);
};

export default NavbarLogo;
