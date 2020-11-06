import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, {useState} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import MemeCreate from './components/MemeCreate';
import MemeTemplateGrid from './components/MemeTemplateGrid';
import theme from './Theme'
import AuthRoute from './components/AuthRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import './index.css'
import { ImgContext, UserContext } from './components/context';

function App() {
	const [user, setUser] = useState(localStorage.getItem('user'))
	const [img, setImg]   = useState(null)
	return (
	<UserContext.Provider value={[user, setUser]}>
		<ImgContext.Provider value={[img, setImg]}>
				<Header />
				<BrowserRouter>
					<Route exact path="/login">
						<Login />
					</Route>
					<AuthRoute path="/">
						<MemeTemplateGrid />
					</AuthRoute>
					<AuthRoute path="/:name/:id/:boxes" >
						<MemeCreate />
					</AuthRoute>
				</BrowserRouter>
				<Footer />
		</ImgContext.Provider>
	</UserContext.Provider>
	
	);
}

export default App;
