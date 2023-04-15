import ImageScrollBar from '@/components/Misc/ImageScrollBar';
import PropertyAmenities from '@/components/Property/PropertyAmenities';
import PropertyDescription from '@/components/Property/PropertyDescription';
import PropertyReview from '@/components/Property/PropertyReview';
import PropertyTitle from '@/components/Property/PropertyTitle';
import { FetchApi } from '@/fetch/FetchApi';
import { FetchedPropertyDetailsProps } from '@/types/Props/Fetch';
import { Box, Flex, Text } from '@chakra-ui/react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

const PropertyDetails: FC<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
	propertyDetails: {
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		description,
		type,
		purpose,
		furnishingStatus,
		amenities,
		photos,
	},
}) => {
	const ShowPhotos = photos && <ImageScrollBar data={photos} />;

	return (
		<Box
			maxWidth='1000px'
			margin='auto'
			p='4'
		>
			{ShowPhotos}
			<Box p='6'>
				<Flex
					flexWrap='wrap'
					p='5'
					paddingTop='0'
					justifyContent='flex-start'
				>
					<PropertyDescription
						isVerified={isVerified}
						price={price}
						rentFrequency={rentFrequency}
						agency={agency}
						rooms={rooms}
						baths={baths}
						area={area}
					/>
					<Box
						marginTop='2'
						marginBottom='2'
						fontWeight='bold'
					>
						<PropertyTitle title={title} />
						<Text
							lineHeight='2'
							color='gray.600'
						>
							{description}
						</Text>
					</Box>
					<PropertyReview
						type={type}
						purpose={purpose}
						furnishingStatus={furnishingStatus}
					/>
					<PropertyAmenities amenities={amenities} />
				</Flex>
			</Box>
		</Box>
	);
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const id = context.params && context.params.id ? context.params.id : '';
	
	const data: FetchedPropertyDetailsProps =
		await FetchApi<FetchedPropertyDetailsProps>(
			`https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`
		);

	return {
		props: {
			propertyDetails: data,
		},
	};
};

export default PropertyDetails;
