import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider } from 'antd';

const CollectionsByAuthor = (props) => {
	const { Paragraph } = Typography;
	const author = props.author;
	const collections = props.collections;

	return (
		<Typography key={author.id}>
			<Link
				to={'/authors/' + author.id}
				style={{ color: 'black', fontSize: 'xx-large' }}
			>
				Author: {author.pseudonym}
			</Link>
			<div>{author.info}</div>
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
		</Typography>
	);
};

export { CollectionsByAuthor };
