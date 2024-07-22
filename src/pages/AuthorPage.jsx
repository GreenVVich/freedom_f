import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getAuthor } from '../api';
import { CollectionsByAuthor } from '../components/CollectionsByAuthor';

const AuthorPage = () => {
	const [data, setData] = useState();
	const author_id = useParams().id;

	useEffect(() => {
		getAuthor(author_id).then((info) => {
			setData(info);
			document.title = info.author.pseudonym;
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{!!data ? (
				<CollectionsByAuthor
					author={data.author}
					collections={data.collections}
				/>
			) : (
				<h1>Идёт загрузка, либо данного произведения ещё нет</h1> // TODO Loading, 404 error with redirect
			)}
		</div>
	);
};

export default AuthorPage;
