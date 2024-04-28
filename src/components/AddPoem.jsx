import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';

import { postPoem } from '../api';

const AddPoem = (props) => {
	const { TextArea } = Input;

	const [poems, setPoems] = props.value.poems;
	const [data, setData] = useState();

	const [name, setName] = useState();
	const [content, setContent] = useState();

	useEffect(() => {
		if (!!data) {
			setPoems([
				...poems,
				{
					id: data.id,
					name: data.name,
					content: data.content,
				},
			]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<div>
			<Input
				placeholder='For name'
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<TextArea
				autoSize
				type='text'
				placeholder='For content'
				value={content}
				onChange={(event) => {
					setContent(event.target.value);
					event.target.value = '';
				}}
			/>
			<Button
				onClick={() => {
					postPoem({
						album_id: props.value.album_id,
						name: name,
						content: content,
					}).then((return_data) => {
						setData(return_data);
					});
					setName('');
					setContent('');
				}}
			>
				AddNew
			</Button>
		</div>
	);
};

export { AddPoem };
