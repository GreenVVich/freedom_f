import React from 'react';
import { Typography, Divider } from 'antd';

const Poem = (props) => {
	return (
		<Typography style={{}}>
			<Divider
				style={{
					fontFamily: 'inherit',
					fontSize: 'x-large',
				}}
			>
				{props.value.name}
			</Divider>
			<pre
				style={{
					fontFamily: 'inherit',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{props.value.content}
			</pre>
			<Divider />
		</Typography>
	);
};

export { Poem };
