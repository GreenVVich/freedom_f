import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCollection } from '../api';
import { Header, AddPoem, Collection } from '../components';
import { LoadingPlaceholder } from '../UI';

const PoemsByCollection = () => {
	const collection_id = useParams().id;

	const [collectionData, setCollectionData] = useState();

	const [poems, setPoems] = useState();

	useEffect(() => {
		getCollection(collection_id).then((data) => {
			setCollectionData(data);
			setPoems(data.poems);
			document.title = data.collection.name;
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Header />
			<AddPoem
				value={{
					poems: [poems, setPoems],
					collection_id: +collection_id,
					author_id: !!collectionData
						? collectionData.author.id
						: null,
				}} // TODO author_id = user.id
			/>

			{!!collectionData ? (
				<Collection
					value={{
						author: collectionData.author,
						collection: collectionData.collection,
						poems: poems,
					}}
				/>
			) : (
				<LoadingPlaceholder />
			)}
		</div>
	);
};

export default PoemsByCollection;
