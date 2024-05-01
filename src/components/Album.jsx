import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import Poem from './Poem';

const Album = (props) => {
	const { Title, Paragraph } = Typography;

	const author = props.value.author;
	const album = props.value.album;
	const poems = props.value.poems;

	return (
		<Paragraph>
			<h2>Album: {album.name}</h2>
			{poems.map((poemList) => (
				<Poem value={poemList} key={poemList.id} />
			))}
			<Link
				to={'/authors/' + author.id}
				style={{
					color: 'black',
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				<Title>Author: {author.pseudonym} </Title>
			</Link>
			<h3
				style={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				<i>Date: in progress</i>
			</h3>
		</Paragraph> //TODO Date upgrade
	);
};

export { Album };
