import { BannerPicProps } from '@/types/Props/Banner';
import { Image } from '@chakra-ui/react';
import { FC } from 'react';

const BannerPic: FC<BannerPicProps> = ({ imageUrl }) => {
	return (
		<>
			<Image
				alt='Banner'
				src={imageUrl}
				width={500}
				height={300}
			/>
		</>
	);
};

export default BannerPic;
