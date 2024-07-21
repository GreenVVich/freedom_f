import { useLayoutEffect, useState } from 'react';

export const useChangeTheme = () => {
	const [theme, setTheme] = useState(localStorage.getItem('app_theme'));

	useLayoutEffect(() => {
		document.documentElement.setAttribute('selected_theme', theme);
		localStorage.setItem('app_theme', theme);
	}, [theme]);

	return { theme, setTheme };
};
