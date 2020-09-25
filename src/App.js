import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import MemeTemplateGrid from './components/MemeTemplateGrid';
import theme from './Theme'
function App() {
	return (
	<ThemeProvider theme={theme}>
		<Header/>
		<BrowserRouter>
			<Route exact path="/">
				<MemeTemplateGrid />
			</Route>
		</BrowserRouter>
	</ThemeProvider>
	);
}

export default App;
