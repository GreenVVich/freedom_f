import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getAlbum } from '../api';
import { AddPoem, Album } from '../components';

const PoemsByAlbum = () => {
	const album_id = useParams().id;

	const [albumData, setAlbumData] = useState();

	const [poems, setPoems] = useState();

	useEffect(() => {
		getAlbum(album_id).then((data) => {
			setAlbumData(data);
			setPoems(data.poems);
			document.title = data.album.name;
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<AddPoem value={{ poems: [poems, setPoems], album_id: album_id }} />
			{!!albumData ? (
				<Album
					value={{
						author: albumData.author,
						album: albumData.album,
						poems: poems,
					}}
				/>
			) : (
				<h1>Идёт загрузка, либо данного произведения ещё нет</h1> // TODO Loading, 404 error with redirect
			)}
		</div>
	);
};

export default PoemsByAlbum;
