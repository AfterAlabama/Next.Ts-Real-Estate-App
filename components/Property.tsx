import { PropertyProps } from '@/utils/Props';
import { Avatar, Box, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import defaultImage from '../assets/house.jpg';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';

const Property: FC<PropertyProps> = ({
	property: {
		externalID,
		coverPhoto,
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
	},
}) => {
	const rentCondition = 'monthly' ? 'Ежемесячно' : 'Ежегодно';

	const areaInMetrics = area * 0.092903411613275;

	return (
		<div>
			<Link href={`/property/${externalID}`} passHref>
				<Flex
					flexWrap='wrap'
					w='420px'
					p='5'
					paddingTop='0'
					cursor='pointer'
					justifyContent='flex-start'
				>
					<Box>
						<Image
							alt='coverPhoto'
							src={coverPhoto ? coverPhoto.url : `${defaultImage}`}
							width={400}
							height={260}
						/>
					</Box>
					<Box w='full'>
						<Flex
							paddingTop='2'
							alignItems='center'
							justifyContent='space-between'
						>
							<Flex alignItems='center'>
								<Box paddingRight='3' color='green.400'>
									{isVerified && <GoVerified />}
								</Box>
								<Text fontWeight='bold' fontSize='lg'>
									Цена ${millify(price)}
									{rentFrequency && `/${rentCondition}`}
								</Text>
							</Flex>
							<Box>
								<Avatar size='md' src={agency.logo.url} />
							</Box>
						</Flex>
						<Flex
							alignItems='center'
							p='1'
							justifyContent='space-between'
							w='250px'
							color='blue.400'
						>
							{rooms} <FaBed /> | {baths} <FaBath /> | {millify(areaInMetrics)}{' '}
							кв.м. {<BsGridFill />}
						</Flex>
            <Text fontSize='lg'>
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </Text>
					</Box>
				</Flex>
			</Link>
		</div>
	);
};

export default Property;
