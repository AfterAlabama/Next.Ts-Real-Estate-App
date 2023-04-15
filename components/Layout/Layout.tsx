import { ChildrenOnlyProps } from '@/types/Props/Generic';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { FC } from 'react';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';

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
				<nav>
					<Navbar />
				</nav>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</Box>
		</>
	);
};

export default Layout;
