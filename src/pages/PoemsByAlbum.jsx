import React, { useState, useEffect } from 'react';
import { getAlbum } from '../api';
import { AddPoem, Album } from '../components';

const PoemsByAlbum = (props) => {
	const [albumData, setAlbumData] = useState();

	const [author, setAuthor] = useState();
	const [album, setAlbum] = useState();
	const [poems, setPoems] = useState();
	const album_id = props.value;

	useEffect(() => {
		getAlbum(album_id).then((data) => {
			setAlbumData(data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (!!albumData) {
			setAuthor(albumData.author);
			setAlbum(albumData.album);
			setPoems(albumData.poems);
		}
	}, [albumData]);
	return (
		<div>
			<AddPoem value={{ poems: [poems, setPoems], album_id: album_id }} />
			{!!author ? (
				<Album value={{ author: author, album: album, poems: poems }} />
			) : (
				<div>Погоди</div> // TODO Loading
			)}
		</div>
	);
};

export default PoemsByAlbum;
