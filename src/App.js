import React from 'react';
import Layout from 'antd/es/layout/layout';

import PoemsByAlbum from './pages/PoemsByAlbum';

function App() {
	return (
		<Layout
			style={{
				width: '99%',
				justifyContent: 'center',
				backgroundColor: 'ghostwhite',
			}}
		>
			<PoemsByAlbum value={1} />
		</Layout>
	);
}

export default App;
