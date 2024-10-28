import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Collection.module.css';
import { dateServerToLocalFormat } from '../../ulitls/dateFormat';
import { Poem } from '../Poem';

const Collection = (props) => {
	const author = props.value.author;
	const collection = props.value.collection;
	const poems = props.value.poems;

	const date = dateServerToLocalFormat(collection.publish_date);

	return (
		<div className={classes.FullBlock}>
			<div className={classes.CollectionTitle}>
				Collection: {collection.name}
			</div>

			{poems.map((poemProps) => (
				<Poem value={poemProps} key={poemProps.id} />
			))}

			<div className={classes.InfoBlock}>
				<Link
					to={'/authors/' + author.id}
					className={classes.AuthorLink}
				>
					Author: {author.pseudonym}
				</Link>

				<i className={classes.DateInfo}>Date: {date}</i>
			</div>
		</div>
	);
};

export { Collection };
