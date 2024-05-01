import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider } from 'antd';

const AlbumsByAuthor = (props) => {
	const { Title, Paragraph } = Typography;
	const author = props.author;
	const albums = props.albums;

	return (
		<Typography key={author.id}>
			<Link to={'/authors/' + author.id} style={{ color: 'black' }}>
				<Title>Author: {author.pseudonym} </Title>
			</Link>
			<Paragraph>
				{albums.map((album) => (
					<div key={album.id}>
						<Link
							to={'/albums/' + album.id}
							title='Aboba'
							key={album.id}
							style={{ color: 'black' }}
						>
							{' '}
							{album.name}
						</Link>
						{
							// TODO description
						}
						<br />
					</div>
				))}
				<br />
			</Paragraph>
			<Divider />
		</Typography>
	);
};

export { AlbumsByAuthor };
