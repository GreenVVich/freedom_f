import { useLayoutEffect } from 'react';

export const useSetTheme = () => {
	const isDarkTheme = window?.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;
	const theme = localStorage.getItem('app_theme');
	const defaultTheme = isDarkTheme ? 'dark' : 'light';

	if (theme !== 'dark' && theme !== 'light') {
		localStorage.setItem('app_theme', defaultTheme);
	}

	useLayoutEffect(() => {
		document.documentElement.setAttribute(
			'selected_theme',
			theme || defaultTheme
		);
	}, [theme, defaultTheme]);
};
