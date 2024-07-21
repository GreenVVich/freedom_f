import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider } from 'antd';

import classes from './CollectionsByAuthor.module.css';

const CollectionsByAuthor = (props) => {
	const { Paragraph } = Typography;
	const author = props.author;
	const collections = props.collections;

	return (
		<div key={author.id}>
			<Link
				to={'/authors/' + author.id}
				className={classes.AuthorPseudonym}
			>
				Author: {author.pseudonym}
			</Link>
			<div className={classes.AuthorInfo}>{author.info}</div>
			<Paragraph>
				{collections.map((collection) => (
					<div key={collection.id}>
						<Link
							to={'/collections/' + collection.id}
							key={collection.id}
							style={{ color: 'black', fontSize: 'x-large' }}
						>
							{collection.name}
						</Link>
						<div>{collection.description}</div>
						<br />
					</div>
				))}
				<br />
			</Paragraph>
			<Divider />
		</div>
	);
};

export { CollectionsByAuthor };
