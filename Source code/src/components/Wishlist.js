import React        from 'react';
import heart_wl_img from '../media/cart/heart.png';
import { Link }     from 'react-router-dom'
import '../css/Wishlist.css';

class Wishlist extends React.Component {



  render() {
    return (
        <div>
          <div className='wishlist_main'>
            <div className='wishlist_main_emptymsgwrap'>
             <div className='wishlist_main_emptymsgwrap'>
                <span className='wishlist_m_wl_ftitle'>Wishlist</span>
                <img src={heart_wl_img} alt=''/>
                <span className='wishlist_m_wl_stitle'>Your wishlist is currently empty.</span>
                <span className='wishlist_m_wl_ttitle'>Your wishlist will be stored here as long as you need.</span>
                <span className='wishlist_m_wl_ttitle'>You will find a lot of interesting products on our shop page.</span>
                <Link to={'/store'} className='wishlist_rettoshopbtn'>Return to shop</Link>
            </div>
            </div>
          </div>
            <span className='c_wrap_endcont_bg'></span>
        </div>
      )
  }
}



export default Wishlist;
