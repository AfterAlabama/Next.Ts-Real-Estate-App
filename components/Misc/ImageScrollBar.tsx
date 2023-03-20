import { ImageScrollBarProps } from '@/types/Props/Property';
import { Box, Image } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { LeftScrollArrow, RightScrollArrow } from './ScrollArrow';

const ImageScrollBar: FC<ImageScrollBarProps> = ({ data }) => {
	const { scrollNext } = useContext(VisibilityContext);

	const ShowScrollPics = data.map((item) => (
		<Box
			key={item.id}
			width='910px'
			itemID={item.id}
			p='1'
		>
			<Image
				alt='property'
				src={item.url}
				width={1000}
				height={500}
				sizes='(max-width:500px) 100px, (max-width:1024px) 400px, 1000px'
			/>
		</Box>
	));

	return (
		<ScrollMenu
			LeftArrow={LeftScrollArrow}
			RightArrow={RightScrollArrow}
		>
			{ShowScrollPics}
		</ScrollMenu>
	);
};

export default ImageScrollBar;
