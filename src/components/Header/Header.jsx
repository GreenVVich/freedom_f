import React from 'react';

import classes from './Header.module.css';
import { useChangeTheme } from '../../hooks';

const Header = () => {
	const { theme, setTheme } = useChangeTheme();

	const ChangeTheme = () => {
		const new_theme = theme === 'dark' ? 'light' : 'dark';
		setTheme(new_theme);
	};

	return (
		<header className={classes.Header}>
			<button className={classes.LeftButton}>Button 1</button>
			<div className={classes.ButtonGroup}>
				<button className={classes.RightButton} onClick={ChangeTheme}>
					Change theme
				</button>
				<button className={classes.RightButton}>Button 3</button>
				<button className={classes.RightButton}>Button 4</button>
			</div>
		</header>
	);
};

export { Header };
