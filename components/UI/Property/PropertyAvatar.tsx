import { PropertyAvatarProps } from '@/utils/Props/Property';
import { Avatar, Box } from '@chakra-ui/react';
import { FC } from 'react';

const PropertyAvatar: FC<PropertyAvatarProps> = ({ agency }) => {
	return (
		<Box>
			<Avatar
				size='md'
				src={agency.logo.url}
			/>
		</Box>
	);
};

export default PropertyAvatar;
