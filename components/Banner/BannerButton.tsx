import { BannerButtonProps } from '@/types/Props/Banner';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const BannerButton: FC<BannerButtonProps> = ({ link, buttonText }) => {
	return (
		<Button fontSize='xl'>
			<Link href={link}>{buttonText}</Link>
		</Button>
	);
};

export default BannerButton;
