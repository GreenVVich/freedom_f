import axios from 'axios';

import { config } from '../../config';

export const postPoem = async (poem) => {
	try {
		const response = await axios.post(
			`${config.API_BASE_URL}/lyrics/poem`,
			poem
		);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};
