import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Header.module.css';
import { useChangeTheme } from '../../hooks';

const Header = () => {
	const { theme, setTheme } = useChangeTheme();

	const navigate = useNavigate();
	const ToMainPage = () => {
		navigate('/');
	};

	const ChangeTheme = () => {
		const new_theme = theme === 'dark' ? 'light' : 'dark';
		setTheme(new_theme);
	};

	return (
		<header className={classes.Header}>
			<button className={classes.LeftButton} onClick={ToMainPage}>
				На главную страницу {/*TODO Icon Home */}
			</button>

			<div className={classes.ButtonGroup}>
				<button className={classes.RightButton} onClick={ChangeTheme}>
					Change theme {/*TODO Icon Sun/Moon */}
				</button>

				<button className={classes.RightButton}>Button 3</button>

				<button className={classes.RightButton}>Button 4</button>
			</div>
		</header>
	);
};

export { Header };
