import React from 'react'
import CartItem from './CartItem'
import Loading from './Loading'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { state, inc, dec, remove, clear } = useGlobalContext()

  if(state.loading) {
    return <Loading />
  }

  if (state.cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {state.cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${state.total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => clear()}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
