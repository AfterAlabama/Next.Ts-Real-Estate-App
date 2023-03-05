export const useDebounce = (cb: Function, delay: number) => {
	let timeout: number;
	return (args: string) => {
		clearTimeout(timeout);
		timeout = window.setTimeout(() => {
			cb(args);
		}, delay);
	};
};
