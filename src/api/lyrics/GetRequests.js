import axios from 'axios';

export const getAlbum = async (album_id) => {
	try {
		const response = await axios.get(
			`http://192.168.1.116:8000/lyrics/albums/${album_id}`
		);
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};

export const getWelcome = async () => {
	try {
		const response = await axios.get('http://192.168.1.116:8000/lyrics/');
		return response.data;
	} catch (err) {
		console.error(err.toJSON());
	}
};
