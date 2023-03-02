import { BannerProps } from '@/utils/Props';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Banner: FC<BannerProps> = ({
	imageUrl,
	purpose,
	firstTitle,
	secondTitle,
	firstDescription,
	secondDescription,
	link,
	buttonText,
}) => {
	return (
		<Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
			<Image alt='Banner' src={imageUrl} width={500} height={300} />
			<Box p='5'>
				<Text color='gray.500' fontSize='sm' fontWeight='medium'>
					{purpose}
				</Text>
				<Text fontSize='3xl' fontWeight='bold'>
					{firstTitle} <br /> {secondTitle}
				</Text>
				<Text fontSize='lg' color='gray.700' paddingTop='3' paddingBottom='3'>
					{firstDescription} <br /> {secondDescription}
				</Text>
				<Button fontSize='xl'>
					<Link href={link}>{buttonText}</Link>
				</Button>
			</Box>
		</Flex>
	);
};

export default Banner;
