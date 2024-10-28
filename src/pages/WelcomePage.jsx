import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getWelcome } from '../api';
import { CollectionsByAuthors } from '../components/CollectionsByAuthors';
import { Header } from '../components/Header';

const WelcomePage = () => {
	useEffect(() => {
		document.title = 'Welcome!';
	});

	const navigate = useNavigate();

	useEffect(() => {
		navigate('/');
	}, [navigate]);

	const [data, setData] = useState();

	useEffect(() => {
		getWelcome().then((info) => setData(info));
	}, []);

	return (
		<div>
			<Header />
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
