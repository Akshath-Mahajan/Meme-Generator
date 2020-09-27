import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MemeCreate from './components/MemeCreate';
import MemeTemplateGrid from './components/MemeTemplateGrid';
import theme from './Theme'
function App() {
	return (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Route exact path="/">
				<MemeTemplateGrid />
			</Route>
			<Route exact path="/:id/:boxes">
				<MemeCreate />
			</Route>
		</BrowserRouter>
	</ThemeProvider>
	);
}

export default App;
