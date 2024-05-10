import React, { useEffect, useState } from 'react';
import { Button, Input, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';

import { postPoem } from '../api';

const AddPoem = (props) => {
	const { TextArea } = Input;

	const [poems, setPoems] = props.value.poems;
	const [data, setData] = useState();

	const [name, setName] = useState();
	const [content, setContent] = useState();
	const [create_date, setDate] = useState();

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

	const sendPoem = () => {
		postPoem({
			collection_id: props.value.collection_id,
			name: name,
			content: content,
			create_date: !!create_date ? create_date.format() : null,
		}).then((return_data) => {
			setData(return_data);
			setName('');
			setContent('');
			setDate();
		});
	};

	return (
		<div>
			<Input
				placeholder='Введите название'
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<TextArea
				autoSize
				type='text'
				placeholder='Введите содержимое'
				value={content}
				onChange={(event) => {
					setContent(event.target.value);
				}}
			/>
			<DatePicker
				value={create_date || null}
				format={{
					format: 'DD-MMMM-YYYY HH:mm',
				}}
				onChange={(data) => setDate(data)}
				locale={locale}
			/>
			<Button onClick={sendPoem}>Добавить</Button>
		</div>
	);
};

export { AddPoem };
