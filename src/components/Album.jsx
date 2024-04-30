import React from 'react';

import Poem from './Poem';

const Album = (props) => {
	const author = props.value.author;
	const album = props.value.album;
	const poemList = props.value.poems;

	return (
		<div>
			<h2>Album: {album.name}</h2>
			{poemList.map((poemList) => (
				<Poem value={poemList} key={poemList.id} />
			))}
			<h2
				style={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				Author: {author.pseudonym}
			</h2>
			<h3
				style={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				<i>Date: in progress</i>
			</h3>
		</div> //TODO Date upgrade
	);
};

export { Album };
