import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getAuthor } from '../api';
import { Header, CollectionsByAuthor } from '../components';
import { LoadingPlaceholder } from '../UI';

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
			<Header />
			{!!data ? (
				<CollectionsByAuthor
					author={data.author}
					collections={data.collections}
				/>
			) : (
				<LoadingPlaceholder />
			)}
		</div>
	);
};

export default AuthorPage;
