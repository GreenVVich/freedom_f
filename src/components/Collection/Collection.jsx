import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import { dateServerToLocalFormat } from '../../ulitls/dateFormat';
import { Poem } from '../Poem';

const Collection = (props) => {
	const { Paragraph } = Typography;

	const author = props.value.author;
	const collection = props.value.collection;
	const poems = props.value.poems;

	const date = dateServerToLocalFormat(collection.publish_date);

	return (
		<Paragraph>
			<h2>Collection: {collection.name}</h2>
			{poems.map((poemProps) => (
				<Poem value={poemProps} key={poemProps.id} />
			))}
			<div
				style={{
					display: 'flex',
					justifyContent: 'end',
					flexBasis: 'content',
				}}
			>
				<Link
					to={'/authors/' + author.id}
					style={{
						color: 'black',
						fontSize: 'xx-large',
					}}
				>
					Author: {author.pseudonym}
				</Link>
			</div>
			<h3
				style={{
					display: 'flex',
					justifyContent: 'end',
					margin: 10,
				}}
			>
				<i>Date: {date}</i>
			</h3>
		</Paragraph>
	);
};

export { Collection };
