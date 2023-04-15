import { PropertyIconsProps } from '@/types/Props/Property';
import { Flex } from '@chakra-ui/react';
import millify from 'millify';
import { FC } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { FaBath, FaBed } from 'react-icons/fa';

const PropertyIcons: FC<PropertyIconsProps> = ({ area, rooms, baths }) => {
	const areaInMetrics = area * 0.092903411613275;
	
	return (
		<Flex
			alignItems='center'
			p='1'
			justifyContent='space-between'
			w='250px'
			color='blue.400'
		>
			{rooms} <FaBed /> | {baths} <FaBath /> | {millify(areaInMetrics)} кв.м.{' '}
			{<BsGridFill />}
		</Flex>
	);
};

export default PropertyIcons;
