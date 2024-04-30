import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PoemsByAlbum from './PoemsByAlbumPage';
import TestPage from './TestPage';
import WelcomePage from './WelcomePage';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/test' exact element={<TestPage />} />
			<Route path='/albums/:id' exact element={<PoemsByAlbum />} />
			<Route path='/*' element={<WelcomePage />} />
		</Routes>
	);
};
