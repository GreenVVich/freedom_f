import React from 'react';

import Poem from './Poem';

const Album = (props) => {
	const author = props.value.author;
	const album = props.value.album;
	const poemList = props.value.poems;

	return (
		<div>
			<h3>Album: {album.name}</h3>
			{poemList.map((poemList) => (
				<Poem value={poemList} key={poemList.id} />
			))}
			<h3
				style={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				Author: {author.pseudonym}
			</h3>
			<h2
				style={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				<i>Date: in progress</i>
			</h2>
		</div> //TODO Date upgrade
	);
};

export { Album };
