import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TestPage from './TestPage';
import PoemsByCollection from './PoemsByCollectionPage';
import AuthorPage from './AuthorPage';
import WelcomePage from './WelcomePage';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/test' exact element={<TestPage />} />
			<Route
				path='/collections/:id'
				exact
				element={<PoemsByCollection />}
			/>
			<Route path='/authors/:id' exact element={<AuthorPage />} />
			<Route path='/*' element={<WelcomePage />} />
		</Routes>
	);
};
