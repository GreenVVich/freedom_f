import React from 'react';

import { AlbumsByAuthor } from './AlbumsByAuthor';

const AlbumsByAuthors = (props) => {
	const dataArray = props.value;

	return dataArray.map((data) => (
		<AlbumsByAuthor author={data.author} albums={data.albums} />
	));
};

export { AlbumsByAuthors };
