import { useLayoutEffect } from 'react';

export const useSetTheme = () => {
	const theme = localStorage.getItem('app_theme');
	console.log(theme);

	if (theme !== 'dark' && theme !== 'light') {
		const isDarkTheme = window?.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		const defaultTheme = isDarkTheme ? 'dark' : 'light';

		localStorage.setItem('app_theme', defaultTheme);
		console.log('aboba');
	}

	useLayoutEffect(() => {
		document.documentElement.setAttribute('selected_theme', theme);
	}, [theme]);
};
