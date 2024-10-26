import React from 'react';

import classes from './Poem.module.css';
import { Divider } from '../../UI';

const Poem = (props) => {
	return (
		<div className={classes.PoemBlock}>
			<Divider content={props.value.name} />
			<div className={classes.PoemContent}>{props.value.content}</div>
			<Divider />
		</div>
	);
};

export { Poem };
