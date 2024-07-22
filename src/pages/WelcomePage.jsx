import React, { useEffect, useState } from 'react';

import { getWelcome } from '../api';
import { CollectionsByAuthors } from '../components/CollectionsByAuthors';
import { useChangeTheme } from '../hooks';

const WelcomePage = () => {
	useEffect(() => {
		document.title = 'Welcome!';
	});

	const [data, setData] = useState();

	useEffect(() => {
		getWelcome().then((info) => setData(info));
	}, []);

	const { theme, setTheme } = useChangeTheme();

	const ChangeTheme = () => {
		const new_theme = theme === 'dark' ? 'light' : 'dark';
		setTheme(new_theme);
	};

	return (
		<div>
			<button onClick={ChangeTheme}>Change theme!</button>
			<h1 style={{ color: 'var(--text)' }}>Welcome!</h1>

			{!!data ? (
				<CollectionsByAuthors value={data} />
			) : (
				<h1>Идёт загрузка</h1>
			)}
		</div>
	);
};

export default WelcomePage;
