import { ThemeProvider } from '@material-ui/core';
import React, {useState} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import MemeCreate from './components/MemeCreate';
import MemeTemplateGrid from './components/MemeTemplateGrid';
import theme from './Theme'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import './index.css'
import { UserContext } from './components/context';

function App() {
	const [user, setUser] = useState(null)
	return (
	<ThemeProvider theme={theme}>
		<UserContext.Provider value={[user, setUser]}>
			<Header />
			<BrowserRouter>
				<Route exact path="/">
					{user?<MemeTemplateGrid />:<Login />}
				</Route>
				<Route exact path="/:name/:id/:boxes"
				render={()=>user?
				<MemeCreate />:
				<Redirect to={{pathname:"/"}} />
				}/>
			</BrowserRouter>
			<Footer />
		</UserContext.Provider>
	</ThemeProvider>
	);
}

export default App;
