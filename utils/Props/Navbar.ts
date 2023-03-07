import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface NavbarLogoProps {
	text: string;
}

export interface NavbarListProps {
	NavbarList: NavbarListItemProps[];
}

export interface NavbarListItemProps {
	href: string;
	icon: ReactJSXElement;
	text: string;
}
