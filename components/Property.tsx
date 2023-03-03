import { PropertyProps } from '@/utils/Props/Property';
import Link from 'next/link';
import { FC } from 'react';
import PropertyContent from './UI/Property/PropertyContent';

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
	return (
		<>
			<Link
				href={`/property/${externalID}`}
				passHref
			>
				<PropertyContent
					coverPhoto={coverPhoto}
					isVerified={isVerified}
					price={price}
					rentFrequency={rentFrequency}
					agency={agency}
					rooms={rooms}
					baths={baths}
					title={title}
					area={area}
				/>
			</Link>
		</>
	);
};

export default Property;
