import React     from 'react';
import { Link }  from 'react-router-dom'
import '../css/Header.css';
 
 

class Header extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      activeSearch: false, 
    }
  }


componentDidMount() {
  // Window resize listener
  window.addEventListener('resize', (e) => this.headResizeHand(e));
}

componentWillUnmount() {
   // Remove window resize listener
  window.removeEventListener('resize', (e) => this.headResizeHand(e));
}

 
headResizeHand(e) {
  // Hide mob active search
  if(window.innerWidth > 680) {
    this.setState({ activeSearch: false })
    if(document.querySelector('.head_dropmobmenu') && document.querySelector('.head_dropmobmenu').classList.remove('hdrop_open'));
  }
  if(window.innerWidth > 700) {
    if(document.querySelector('.stwrpmc_wr_filters') && document.querySelector('.stwrpmc_wr_filters').classList.contains('active_mobfilter')) {
      document.querySelector('.stwrpmc_wr_filters').classList.remove('active_mobfilter');
    }
  }
}

navClick(e) {
  // Nav links click listener
  let hNavs = document.querySelectorAll('.hwnav_a');

  for(let i=0; i < hNavs.length; i++) {
    hNavs[i].classList.remove('hnava_active');
  }

  if(e.target.classList.contains('hwnav_a')) {
    e.target.classList.add('hnava_active');
  }

  // Hide search input if opened
   this.setState({ activeSearch: false })
}

handleNavSearch() {
  this.setState({ activeSearch: !this.state.activeSearch })
}

openHambMenu() {
  document.querySelector('.head_dropmobmenu').classList.toggle('hdrop_open');
}



  render() {
    return (
        <div>
          <div className='header_main'>

            <div className='h_wrap_navmenu h_wrapnm_a'>
              <Link to={'/'} className='hwnav_a hwnav_home'>Home</Link>
              <Link to={'/store'} className='hwnav_a hwnav_store'>Store</Link>
              <Link to={'/about'} className='hwnav_a hwnav_about'>About</Link>
              <Link to={'/contact'} className='hwnav_a hwnav_contact'>Contact</Link>
            </div>

            <Link to={'/'} className='h_w_navmenu_wraplogo'>
              <span className='hwn_wlog_txtf'>Coffee</span>
              <span className='hwn_wlog'></span>
              <span className='hwn_wlog_txts'>shop</span>
            </Link>
            <div className='h_wrap_navmenu h_wrapnm_right'>
              <div className='h_wrapnm_right_wrapper'>
                <div className='hwpm_search_wrap' style={{'width': this.state.activeSearch ? '170px' : '0'}}>
                  <input type='text'/>
                </div>
                  <i className='fas fa-search fa-b-search' onClick={()=>this.handleNavSearch()}></i>
                  <Link to={'/wishlist'} onClick={(e) => this.navClick(e)}><i className='fas fa-heart'></i></Link>
                  <i className='fas fa-bars fa-b-hambmobmenu' onClick={()=>this.openHambMenu()}></i>
                  <Link to={'/cart'} onClick={(e) => this.navClick(e)}><i className='fas fa-shopping-cart fa-b-shpcart'></i></Link>
              </div>
            </div>

            <div className='head_dropmobmenu'>
              <span className='head_dropmbmenbg'></span>
              <div className='h_drmobm_links'>
                <span><Link to={'/'}>Home</Link></span>
                <span><Link to={'/store'}>Store</Link></span>
                <span><Link to={'/about'}>About</Link></span>
                <span><Link to={'/contact'}>Contact</Link></span>
              </div>
               <div className='h_drmobm_search'>
                <input type='text'/>
                <i className='fas fa-search' onClick={()=>this.openHambMenu()}></i>
              </div>
              <div className='h_drmobm_social'>
                <a href='https://www.facebook.com'><i className="fab fa-facebook-f"></i></a>
                <a href='https://www.twitter.com'><i className="fab fa-twitter"></i></a>
                <a href='https://www.linkedin.com'><i className="fab fa-linkedin-in"></i></a>
                <a href='https://www.youtube.com'><i className="fab fa-youtube"></i></a>
              </div>
            </div>

          </div>
        </div>
      )
  }
}



export default Header;
