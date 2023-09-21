import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';

const CartContainer = () => {
  const { totalCost } = useGlobalContext();

  const { cart, clearItems } = useGlobalContext();
  const cartArray = Array.from(cart.entries());
  //console.log(cartArray); // array of arrays because of Map()

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          // console.log(cartItem);
          const [id, item] = cartItem; //destructuring
          // console.log(id);
          // console.log(item);
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${totalCost.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearItems}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
