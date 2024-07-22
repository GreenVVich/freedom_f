import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './pages/AppRoutes';

import { useSetTheme } from './hooks';

function App() {
	useSetTheme();
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
