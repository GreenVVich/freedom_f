import axios from 'axios';

import { config } from '../../config';

export const getWelcome = async () => {
	try {
		const response = await axios.get(`${config.API_BASE_URL}/lyrics/`);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};

export const getCollection = async (collection_id) => {
	try {
		const response = await axios.get(
			`${config.API_BASE_URL}/lyrics/collections/${collection_id}`
		);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};

export const getAuthor = async (author_id) => {
	try {
		const response = await axios.get(
			`${config.API_BASE_URL}/lyrics/authors/${author_id}`
		);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};
