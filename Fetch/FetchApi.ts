import { useFetch } from '@/utils/Hooks/useFetch';

export const FetchApi = <T>(url: string): Promise<T> => {
	return useFetch(url);
};
