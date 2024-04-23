import React, { useState } from 'react';
import { Button, Input } from 'antd';

const AddPoem = (props) => {
	const { TextArea } = Input;

	const [poemList, setPoemList] = props.value;

	const [name, setName] = useState();
	const [content, setContent] = useState();
	return (
		<div>
			<Input
				placeholder='For name'
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<TextArea
				autoSize
				type='text'
				placeholder='For content'
				value={content}
				onChange={(event) => setContent(event.target.value)}
			/>
			<Button
				onClick={() => {
					setPoemList([
						...poemList,
						{
							id: 1, //TODO
							name: name,
							content: content,
						},
					]);
				}}
			>
				AddNew
			</Button>
		</div>
	);
};

export default AddPoem;
