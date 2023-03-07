import axios, { AxiosResponse } from 'axios';

export const useFetch = async<T>(url:string): Promise<T> => {
	const res: AxiosResponse<T> = await axios.get<T>(url, {
		headers: {
			'X-RapidAPI-Key': process.env.RAPID_KEY,
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		},
	});
	return res.data;
};
