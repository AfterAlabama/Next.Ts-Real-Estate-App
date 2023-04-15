import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface NavbarListItemProps {
	href: string;
	icon: ReactJSXElement;
	text: string;
}

export type NavbarLogoProps = Pick<NavbarListItemProps, 'text'>;
