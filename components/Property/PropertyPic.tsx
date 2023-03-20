import { PropertyPicProps } from '@/types/Props/Property';
import { Image } from '@chakra-ui/react';
import { FC } from 'react';
import defaultImage from '../../assets/house.jpg';

const PropertyPic: FC<PropertyPicProps> = ({ coverPhoto }) => {
	return (
		<>
			<Image
				alt='coverPhoto'
				src={coverPhoto ? coverPhoto.url : `${defaultImage}`}
				width={400}
				height={260}
			/>
		</>
	);
};

export default PropertyPic;
