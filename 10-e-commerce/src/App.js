import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import AuthWrapper from "./pages/AuthWrapper";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./pages/PrivateRoute";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path='/products/:id' component={SingleProductPage} />
          <Route exact path="/checkout" component={PrivateRoute}>
            <CheckoutPage />
          </Route>
          <Route exact path='/error' component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
