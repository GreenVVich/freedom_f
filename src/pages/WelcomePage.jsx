import React, { useEffect, useState } from 'react';

import { getWelcome } from '../api';
import { CollectionsByAuthors } from '../components/CollectionsByAuthors';

const WelcomePage = () => {
	const [data, setData] = useState();

	useEffect(() => {
		document.title = 'Welcome!';
	});

	useEffect(() => {
		getWelcome().then((info) => setData(info));
	}, []);
	return (
		<div>
			<h1>Welcome!</h1>
			{!!data ? (
				<CollectionsByAuthors value={data} />
			) : (
				<h1>Идёт загрузка</h1>
			)}
		</div>
	);
};

export default WelcomePage;
