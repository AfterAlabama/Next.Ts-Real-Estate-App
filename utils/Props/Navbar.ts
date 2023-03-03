import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface NavbarLogoProps {
	text: string;
}

export interface NavbarListItemProps {
	href: string;
	icon: ReactJSXElement;
	text: string;
}
