import { ChildrenOnlyProps } from '@/utils/Props/Generic';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { FC } from 'react';

const Layout: FC<ChildrenOnlyProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Real Estate Site</title>
			</Head>
			<Box
				maxWidth='1280px'
				m='auto'
			>
				<header>navBar</header>
				<main>{children}</main>
				<footer>footer</footer>
			</Box>
		</>
	);
};

export default Layout;
