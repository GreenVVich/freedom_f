import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CollectionsByAuthor.module.css';
import { Divider } from '../../UI';

const CollectionsByAuthor = (props) => {
	const author = props.author;
	const collections = props.collections;

	return (
		<div key={author.id} className={classes.AuthorBlock}>
			<Link
				to={'/authors/' + author.id}
				className={classes.TitleAuthorPseudonym}
			>
				Author: {author.pseudonym}
			</Link>
			<div className={classes.AuthorInfo}>{author.info}</div>
			<div>
				{collections.map((collection) => (
					<div
						key={collection.id}
						className={classes.CollectionBlock}
					>
						<Link
							to={'/collections/' + collection.id}
							key={collection.id}
							className={classes.CollectionLink}
						>
							{collection.name}
						</Link>
						<div className={classes.CollectionInfo}>
							{collection.description}
						</div>
						<br />
					</div>
				))}
				<br />
			</div>
			<Divider />
		</div>
	);
};

export { CollectionsByAuthor };
