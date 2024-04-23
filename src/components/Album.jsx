import React from 'react';

import Poem from './Poem';

const Album = (props) => {
	const poemList = props.value;

	return (
		<div>
			{poemList.map((poemList) => (
				<Poem value={poemList} key={poemList.id} />
			))}
			<h3
				style={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				Author: Aboba
			</h3>
			<h2
				style={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				<i>Date: Aboba</i>
			</h2>
		</div>
	);
};

export default Album;
