import React from 'react';
import { Typography, Divider } from 'antd';

import classes from './Poem.module.css';

const Poem = (props) => {
	return (
		<Typography className={classes.PoemBlock}>
			<Divider>
				<span className={classes.PoemDivider}>{props.value.name}</span>
			</Divider>
			<div className={classes.PoemContent}>{props.value.content}</div>
			<Divider />
		</Typography>
	);
};

export { Poem };
