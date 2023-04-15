export const useDebounce = (cb: (args:string) => void, delay: number) => {
	let timeout: number;
	return (args: string) => {
		clearTimeout(timeout);
		timeout = window.setTimeout(() => {
			cb(args);
		}, delay);
	};
};
