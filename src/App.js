import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MemeCreate from './components/MemeCreate';
import MemeTemplateGrid from './components/MemeTemplateGrid';
import theme from './Theme'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
function App() {
	return (
	<ThemeProvider theme={theme}>
		<Header />
		<BrowserRouter>
			<Route exact path="/">
				<MemeTemplateGrid />
			</Route>
			<Route exact path="/:id/:boxes">
				<MemeCreate />
			</Route>
		</BrowserRouter>
		<Footer />
	</ThemeProvider>
	);
}

export default App;
