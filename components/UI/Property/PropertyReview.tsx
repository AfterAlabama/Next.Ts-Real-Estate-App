import { PropertyReviewProps } from '@/utils/Props/Property';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import PropertyFurnished from './PropertyFurnished';
import PropertyPurpose from './PropertyPurpose';
import PropertyType from './PropertyType';

const PropertyReview: FC<PropertyReviewProps> = ({
	type,
	purpose,
	furnishingStatus,
}) => {
	const FurnishedCondition = furnishingStatus && (
		<PropertyFurnished furnishingStatus={furnishingStatus} />
	);
	return (
		<Flex
			flexWrap='wrap'
			textTransform='uppercase'
			justifyContent='space-between'
		>
			<PropertyType type={type} />
			<PropertyPurpose purpose={purpose} />
			{FurnishedCondition}
		</Flex>
	);
};

export default PropertyReview;
