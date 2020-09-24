import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Header from './components/Header'
import MemeTemplateGrid from './components/MemeTemplateGrid';
import theme from './Theme'

function App() {
	return (
	<ThemeProvider theme={theme}>
		<Header/>
		<MemeTemplateGrid />
	</ThemeProvider>
	);
}

export default App;
