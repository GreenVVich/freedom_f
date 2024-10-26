import React from 'react';

import classes from './Divider.module.css';

const Divider = (props) => {
	const content = props.content;
	return (
		<div className={classes.Divider}>
			{content && <span className={classes.DividerText}>{content}</span>}
		</div>
	);
};

export { Divider };
