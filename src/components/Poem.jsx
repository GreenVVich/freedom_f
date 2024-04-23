import React from 'react';
import { Typography, Divider } from 'antd';

const Poem = (props) => {
	const { Title } = Typography;

	return (
		<Typography style={{}}>
			<Title
				style={{
					fontFamily: 'inherit',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{props.value.name}
			</Title>
			<pre
				style={{
					fontFamily: 'inherit', // -moz-initial
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{props.value.content}
			</pre>
			{/* сделать доп. 2 компонента, один включает автора и дату, другой нет */}
			{/* <br />
			<div>
				<Link>Aboba</Link>
				<Text italic> - 21.12.2012</Text>
			</div> */}
			<Divider />
		</Typography>
	);
};

export default Poem;
