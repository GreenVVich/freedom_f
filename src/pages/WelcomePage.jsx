import React, { useEffect, useState } from 'react';
import { getWelcome } from '../api';

const WelcomePage = () => {
	const [data, setData] = useState();

	useEffect(() => {
		getWelcome().then((info) => setData(info));
	}, []);
	return (
		<div>
			<h1>Welcome!</h1>
			{!!data ? (
				data.map(
					(
						block // TODO new component
					) => (
						<div>
							<h2> Author:{block.author.pseudonim}</h2>
							<div>
								{block.albums.map((album) => (
									<div> {album.name}</div>
								))}
							</div>
							<br />
						</div>
					)
				)
			) : (
				<h1>Идёт загрузка, либо данного произведения ещё нет</h1>
			)}
		</div>
	);
};

export default WelcomePage;
