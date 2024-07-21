import axios from 'axios';

export const postPoem = async (poem) => {
	try {
		const response = await axios.post(
			`http://localhost:8000/lyrics/poems`,
			poem
		);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};
