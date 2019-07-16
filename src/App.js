import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './template/Navbar';
import Header from './template/Header';
import Layout from './template/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Footer from './template/Footer';
import './template/Adjust.css'
class App extends React.Component {

	render() {
		return (
			// RUTE Catre pagini!
			<div>
				<BrowserRouter>
					<Navbar />
					<div className="body">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/contact" component={Contact} />
							<Route path="/about" component={About} />
							<Route component={Error} />
						</Switch>
					</div>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
