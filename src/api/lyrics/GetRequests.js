import axios from 'axios';

export const getWelcome = async () => {
	try {
		const response = await axios.get('/api/lyrics/');
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};

export const getCollection = async (collection_id) => {
	try {
		const response = await axios.get(
			`/api/lyrics/collections/${collection_id}`
		);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};

export const getAuthor = async (author_id) => {
	try {
		const response = await axios.get(`/api/lyrics/authors/${author_id}`);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};
