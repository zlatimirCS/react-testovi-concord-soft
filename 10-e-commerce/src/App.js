import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import ErrorPage from './pages/ErrorPage';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Sidebar />
				<main>
					<Switch>
						<Route path='/' exact component={HomePage} />
						<Route path='/about' exact component={AboutPage} />
						<Route exact path='/cart' component={CartPage} />
						<Route exact path='/products' component={ProductsPage} />
						<Route exact path='/products/:id' component={SingleProductPage} />
						<Route path='*' component={ErrorPage} />
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
