import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getAuthor } from '../api';
import { AlbumsByAuthor } from '../components/AlbumsByAuthor';

const AuthorPage = () => {
	const author_id = useParams().id;

	const [data, setData] = useState();

	useEffect(() => {
		getAuthor(author_id).then((info) => {
			setData(info);
			document.title = info.author.pseudonym;
		});
	});
	return (
		<div>
			{!!data ? (
				<AlbumsByAuthor author={data.author} albums={data.albums} />
			) : (
				<h1>Идёт загрузка, либо данного произведения ещё нет</h1> // TODO Loading, 404 error with redirect
			)}
		</div>
	);
};

export default AuthorPage;
