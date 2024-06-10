import React from 'react';
import { Typography, Divider } from 'antd';

import './Poem.modal.css';

const Poem = (props) => {
	return (
		<Typography className='PoemBlock'>
			<Divider
				style={{
					fontFamily: 'inherit',
					fontSize: 'x-large',
				}}
			>
				{props.value.name}
			</Divider>
			<div className='PoemContent'>{props.value.content}</div>
			<Divider />
		</Typography>
	);
};

export { Poem };
