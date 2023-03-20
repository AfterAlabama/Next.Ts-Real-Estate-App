import axios, { AxiosResponse } from 'axios';

export const useFetch = async<T>(url:string): Promise<T> => {
	const res: AxiosResponse<T> = await axios.get<T>(url, {
		headers: {
			'X-RapidAPI-Key': 'f8c78766a4msh1042635992bc683p12437cjsn59b48b9cdfe9',
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
		}
	});
	return res.data;
};
