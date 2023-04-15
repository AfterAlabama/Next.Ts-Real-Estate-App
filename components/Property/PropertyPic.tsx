import { PropertyPicProps } from '@/types/Props/Property';
import { Image } from '@chakra-ui/react';
import { FC } from 'react';
import defaultImage from '../../assets/house.jpg';

const PropertyPic: FC<PropertyPicProps> = ({ coverPhoto }) => {
	const srcCondition = coverPhoto ? coverPhoto.url : `${defaultImage}`;

	return (
		<Image
			alt='coverPhoto'
			src={srcCondition}
			width={400}
			height={260}
		/>
	);
};

export default PropertyPic;
