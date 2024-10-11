import axios from 'axios';

export const postPoem = async (poem) => {
	try {
		const response = await axios.post(`/api/lyrics/poems`, poem);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};
