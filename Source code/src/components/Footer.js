import React     from 'react';
import { Link }  from 'react-router-dom';
import '../css/Footer.css';



class Footer extends React.Component {


  render() {
    return (
        <div>
          <div className='footer_main'>
            
            <div className='foo_main_bgfmg'></div>
            <div className='foo_main_wrapp'>
              <div className='foo_mwrpp_f foo_mwrpp_f_first'>
                <span className='foo_mwrpp_f_bx fmfbx_ph'>
                  <i className='fas fa-mobile-alt'></i>
                  <span>Phone:</span>
                  <span>333-555-111-000</span>
                </span>

                <span className='foo_mwrpp_f_bx fmfbx_loc'>
                  <i className='fas fa-map-marker-alt'></i>
                  <span>Address:</span>
                  <span>Covaci 4 street, Bucharest</span>
                </span>

                <span className='foo_mwrpp_f_bx_subscr fmfbx_sbscr'>
                  <span><input type='text' placeholder='Enter your mail'/></span>
                  <span>Subscribe <i className="far fa-paper-plane"></i></span>
                </span>
              </div>
              <div className='foo_mwrpp_f foo_mwrpp_sec'>
                <div className='foo_mwrpp_sec_half f_mwrpsec_h_f'>
                  <div className='h_w_navmenu_wraplogo f_mwrpsec_h_flogo'>
                    <span className='hwn_wlog_txtf'>Coffee</span>
                    <span className='hwn_wlog'></span>
                    <span className='hwn_wlog_txts'>shop</span>
                  </div>
                  <div>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet mollis enim. Nullam at dictum turpis.</div>
                </div>
                <div className='foo_mwrpp_sec_half f_mwrpsec_h_s'>
                  <div className='f_mwrpsec_hs_social'>
                    <a href='http://www.facebook.com'><i className="fab fa-facebook-f"></i></a>
                    <a href='http://www.twitter.com'><i className="fab fa-twitter"></i></a>
                    <a href='http://www.linkedin.com'><i className="fab fa-linkedin-in"></i></a>
                    <a href='http://www.youtube.com'><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>

               <div className='foo_mwrpp_f foo_mwrpp_thrd_nav'>
                  <div className='foo_mwrpp_thrdnav_h'>
                    <Link to={'/'} href='https://www.google.ro'>Home</Link>
                    <Link to={'/store'} href='https://www.google.ro'>Store</Link>
                    <Link to={'/about'} href='https://www.google.ro'>About</Link>
                    <Link to={'/contact'} href='https://www.google.ro'>Contact</Link>
                  </div>
                  <div className='foo_mwrpp_thrdnav_h f_mwrpthrdnf_sec'>
                    <span onClick={() => {window.scrollTo({top:0,behavior:'smooth'})}}>Go top<i className="fas fa-long-arrow-alt-up"></i></span>
                  </div>
               </div>

            </div>

          </div>
        </div>
      )
  }
}



export default Footer;
