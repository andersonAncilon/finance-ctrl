import React from 'react';

import StoreContext from 'storeon/react/context';
import { store } from './store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/home';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<StoreContext.Provider value={store}>
					<Route path='/' component={Home} />
				</StoreContext.Provider>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
