import { ReactNode } from 'react';

export interface ChildrenOnlyProps {
	children: ReactNode;
}

export interface ImageScrollBarProps {
	data: [
		{
			id: string;
			url: string;
		}
	];
}