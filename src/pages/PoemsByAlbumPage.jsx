import React, { useState, useEffect } from 'react';
import { getAlbum } from '../api';
import { AddPoem, Album } from '../components';
import { useParams } from 'react-router-dom';

const PoemsByAlbum = () => {
	const album_id = useParams().id;

	const [albumData, setAlbumData] = useState();

	const [author, setAuthor] = useState();
	const [album, setAlbum] = useState();
	const [poems, setPoems] = useState();

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
				<h1>Идёт загрузка, либо данного произведения ещё нет</h1> // TODO Loading, 404 error with redirect
			)}
		</div>
	);
};

export default PoemsByAlbum;
