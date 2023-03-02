import { fetchedListProps } from '@/utils/Props';
import axios from 'axios';

export const FetchApi = async (url: string) => {
	const res = await axios.get<fetchedListProps>(url, {
		headers: {
			'X-RapidAPI-Key': process.env.RAPID_KEY,
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		}
	});

  return res.data
};
