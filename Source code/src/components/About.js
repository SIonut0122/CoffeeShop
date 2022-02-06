import React           from 'react';
import first_coff_img  from '../media/about/first_coff_img.jpg';
import sec_left_img    from '../media/about/sec_left_img.jpg';
import third_right_img from '../media/about/third_right_img.jpg';
import '../css/About.css';



class About extends React.Component {

componentDidMount() {
  // Hightlight 'about' nav btn
  document.querySelector('.hwnav_about').classList.add('hnava_active');
  window.addEventListener('scroll', this.handleAbScroll);
  // Close hdropmobmenu if is active
  if(document.querySelector('.head_dropmobmenu').classList.contains('hdrop_open')) {
    document.querySelector('.head_dropmobmenu').classList.remove('hdrop_open');
  }
}

componentWillUnmount() {
  // Remove highlighted 'about' btn
  document.querySelector('.hwnav_about').classList.remove('hnava_active');
  window.removeEventListener('scroll', this.handleAbScroll);
}

handleAbScroll() {

    // Check if is view
    const DivIsInView = el => {
        const scroll = window.scrollY || window.pageYOffset;
        
        const boundsTop = el.getBoundingClientRect().top + scroll;
        
        const viewport = {
          top: scroll,
          bottom: scroll + window.innerHeight,
        }
          const bounds = {
          top: boundsTop,
          bottom: boundsTop + el.clientHeight,
        }
    
        return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
          || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
    }

  
    // Sec about section 
    let abSecSecTitle = document.querySelector('.ab_maintittle_sec');
    let abSecSecTitleInView = DivIsInView(abSecSecTitle);

    if(abSecSecTitleInView) {
      abSecSecTitle.classList.add('ab_mainttsectxt_clsanim');
      
    }

    let abSecSecImg = document.querySelector('.ab_mwr_hcrimg_sec');
    let abSecSecImgInView = DivIsInView(abSecSecImg);

    if(abSecSecImgInView) {
      abSecSecImg.classList.add('abmrcrsecimganimcls');
      
    }
    let abSecSecTxt = document.querySelector('.ab_maintitt_txtu_sec');
    let abSecSecTxtInView = DivIsInView(abSecSecTxt);

    if(abSecSecTxtInView) {
      abSecSecTxt.classList.add('ab_maintitt_txtu_clsanim');
      
    }

    // Third about section
    let abThirdTitle = document.querySelector('.ab_maintitt_thrd');
    let abThirdTitleInView = DivIsInView(abThirdTitle);

    if(abThirdTitleInView) {
      abThirdTitle.classList.add('ab_maintittle_f');

    }

    let abThrdThrdImg = document.querySelector('.ab_mwr_hcrimg_thrd');
    let abThrdThrdImgInView = DivIsInView(abThrdThrdImg);

    if(abThrdThrdImgInView) {
      abThrdThrdImg.classList.add('abmrcrthrdimganimcls');
      
    }
    let abThrdThrdTxt = document.querySelector('.ab_maintitt_txtu_thrd');
    let abThrdThrdTxtInView = DivIsInView(abThrdThrdTxt);

    if(abThrdThrdTxtInView) {
      abThrdThrdTxt.classList.add('ab_maintitt_txtu_clsanim');
      
    }


}


  render() {
    return (
        <div>
          <div className='about_main'>
            <div className='about_main_wrap'>
              <div className='ab_mwr_abwrap'>
                <span>About</span>
                <span></span>
              </div>
              <div className='ab_mwr_wrow ab_nwrwiw_f'>
                <span className='ab_mrowd_cc ab_mrowd_cc_f'></span>
                <span className='ab_mwrow_througbn'></span>
                <div className='ab_mwr_wrow_half ab_mwr_wrow_half_f'>
                  <span className='ab_maintittle ab_maintittle_f'>How it started...</span>
                  <span className='ab_maintitt_txtu'><span>P</span>raesent feugiat nibh ut tortor scelerisque, a porta purus consectetur. Praesent accumsan leo non vehicula tincidunt. Ut velit mi, sollicitudin sed feugiat sed, ullamcorper elementum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet mollis enim. Nullam at dictum turpis, non consectetur urna. Proin ac fringilla nisi. Vivamus vitae placerat ante, non aliquam risus.</span>
                </div>
                <div className='ab_mwr_wrow_half ab_mwr_wrow_half_s'>
                  <span className='ab_mwrrow_hs_bgimg'></span>
                  <span className='ab_mwr_hcrimg ab_mwr_hcrimg_f'>
                    <img src={first_coff_img} alt=''/>
                  </span>
                </div>
              </div>

              <div className='ab_mwr_wrow ab_mwr_wrow_sec'>
                <div className='ab_mwr_wrow_half_sec ab_mwr_wrow_halfsec_f'>
                  <span className='ab_mwr_hcrimg_sec'>
                    <img src={sec_left_img} alt=''/>
                  </span>
                </div>
                <div className='ab_mwr_wrow_half_sec ab_mwr_wrow_halfsec_s'>
                     <span className='ab_maintittle ab_maintittle_sec'>Why choose us?</span>
                    <span className='ab_maintitt_txtu_sec'><span>P</span>raesent feugiat nibh ut tortor scelerisque, a porta purus consectetur. Praesent accumsan leo non vehicula tincidunt. Sed sit amet mollis enim. Nullam at dictum turpis, non consectetur urna. Proin ac fringilla nisi. Vivamus vitae placerat ante, non aliquam risus.</span>
                </div>
              </div>

              <div className='ab_mwr_wrow ab_mwr_wrow_thrd'>
                <div className='ab_mwr_wrow_half ab_mwr_wrow_half_f'>
                  <span className='ab_mrowd_cc ab_mrowd_cc_ss'></span>
                  <span className='ab_maintittle ab_maintitt_thrd'>Our coffee</span>
                  <span className='ab_maintitt_txtu_thrd'><span>P</span>raesent feugiat nibh ut tortor scelerisque, a porta purus consectetur. Praesent accumsan leo non vehicula tincidunt. Ut velit mi, sollicitudin sed feugiat sed, ullamcorper elementum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet mollis enim. Nullam at dictum turpis, non consectetur urna. Proin ac fringilla nisi. Vivamus vitae placerat ante, non aliquam risus.</span>
                </div>
                <div className='ab_mwr_wrow_half ab_mwr_wrow_half_thrd'>
                  <span className='ab_mrowd_cc ab_mrowd_cc_s'></span>
                  <span className='ab_mwr_hcrimg_thrd'>
                    <img className='abhrimgthrd_nat' src={third_right_img} alt=''/>
                  </span>
                </div>
              </div>

              <div className='ab_iframe_presvideo'>
                <iframe width="862" height="441" src="https://www.youtube.com/embed/G1Bl_cy0svM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <span className='ab_mrowd_cc ab_mrowd_cc_thrd'></span>
              </div>

            </div>
          </div>
          <span className='c_wrap_endcont_bg'></span>
        </div>
      )
  }
}



export default About;
