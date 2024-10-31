import React from 'react';

import classes from './LoadingPlaceholder.module.css';

const LoadingPlaceholder = () => {
	return (
		<div className={classes.LoadingPlaceholder}>
			Идёт загрузка, либо произошла ошибка
		</div>
	);
};

export { LoadingPlaceholder };
