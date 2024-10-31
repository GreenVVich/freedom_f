import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getWelcome } from '../api';
import { CollectionsByAuthors, Header } from '../components';
import { LoadingPlaceholder } from '../UI';

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
				<LoadingPlaceholder />
			)}
		</div>
	);
};

export default WelcomePage;
