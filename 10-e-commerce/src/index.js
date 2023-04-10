import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
// dev-p1u6khthrk0p6n1n.eu.auth0.com
// v8tI9DqQUeWNlrA0GjxYF7tjUO5cAbyY
ReactDOM.render(
  <Auth0Provider
    domain='dev-p1u6khthrk0p6n1n.eu.auth0.com'
    clientId='v8tI9DqQUeWNlrA0GjxYF7tjUO5cAbyY'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
