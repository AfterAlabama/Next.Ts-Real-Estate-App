import { useFetch } from '@/hooks/useFetch';

export const FetchApi = <T>(url: string): Promise<T> => {
	return useFetch(url);
};
