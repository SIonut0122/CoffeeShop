import React          from 'react';
import empty_cart_img from '../media/cart/shopping-cart.png';
import { Link }       from 'react-router-dom'
import '../css/Cart.css';

class Cart extends React.Component {

  render() {
    return (
        <div>
          <div className='cart_main'>
            <div className='cart_main_emptymsgwrap'>
              <span className='cart_m_emptymsgwr_ftitle'>Shopping cart</span>
              <img src={empty_cart_img} alt=''/>
              <span className='cart_m_emptymsgwr_stitle'>Your cart is currently empty.</span>
              <span className='cart_m_emptymsgwr_ttitle'>Before proceed to checkout you must add some products to your shopping cart.</span>
              <span className='cart_m_emptymsgwr_ttitle'>You will find a lot of interesting products on our shop page.</span>
              <Link to={'/store'} className='cart_rettoshopbtn'>Return to shop</Link>
            </div>
          </div>
            <span className='c_wrap_endcont_bg'></span>
        </div>
      )
  }
}



export default Cart;
