import React from 'react';

import { CollectionsByAuthor } from '../CollectionsByAuthor';

const CollectionsByAuthors = (props) => {
	const dataArray = props.value;

	return dataArray.map((data) => (
		<CollectionsByAuthor
			author={data.author}
			collections={data.collections}
			key={data.author.id}
		/>
	));
};

export { CollectionsByAuthors };
