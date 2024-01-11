import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import Newsletter from './pages/Newsletter';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<>
			<Router>
				<Navbar />

				<section className='page'>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/about' component={About} />
						<Route path='/newsletter' component={Newsletter} />
						<Route path='/cocktail/:id' component={SingleCocktail} />
						<Route path='*' component={Error} />
					</Switch>
				</section>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
