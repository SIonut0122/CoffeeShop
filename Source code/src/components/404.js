import React        from 'react';
import bcoff_404img from '../media/404_bcoff_img.png';
import { Link }     from 'react-router-dom'
import '../css/Pagenotfound.css';


class PageNotFound extends React.Component {

  componentDidMount() {
      window.scrollTo(0,0);
  }

  render() {
    return (
        <div>
          <div className='pagenotfound_main'>
         
            <div className='pnfound_wrap'>
              <div className='pntf_wrap_404'>
                <span className='pwr404_let'>4</span>
                <img src={bcoff_404img} alt=''/>
                <span className='pwr404_let'>4</span>
              </div>

              <span className='pwr404_sec_txt'>Oops! Page not found.</span>
              <Link to={'/'} className='pwr404_return_btn'>Return home</Link>
            </div>
          </div>
          <span className='c_wrap_endcont_bg'></span>
        </div>
      )
    }
}



export default PageNotFound;
