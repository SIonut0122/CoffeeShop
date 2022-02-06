import React             from 'react';
import f_cup_coffee      from '../media/coffee_cup_first.png';
import th_bcoff_papbag   from '../media/third_bb_coffee_bagpaper.png';
import multi_coffeebeans from '../media/coff_multibeans.png';
import fth_coffee_cup    from '../media/coffee_shop_csimple.png';
import c_single_bean_cb  from '../media/single_c_bean.png';
import b_coffe_cup       from '../media/black_coffee_cup.png';
import { Link }          from 'react-router-dom'
import '../css/Home.css';


class Home extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      followX: 0,
      x: 0,
      friction: 1 / 30
    }
  }

componentDidMount() {
  // Highlight home nav btn
  document.querySelector('.hwnav_home').classList.add('hnava_active');
  // Scroll listnere
  window.addEventListener('scroll', this.handleScroll);
  // Close hdropmobmenu if is active
  if(document.querySelector('.head_dropmobmenu').classList.contains('hdrop_open')) {
    document.querySelector('.head_dropmobmenu').classList.remove('hdrop_open');
  }
}

componentWillUnmount() {
  // Remove hightlight 'home' btn
   document.querySelector('.hwnav_home').classList.remove('hnava_active');
   window.removeEventListener('scroll', this.handleScroll);
}
handleScroll() {
  let scrollValue = window.scrollY || window.pageYOffset / 100;
    
  let h2CertQualTxt = document.querySelector('.ctwtfbht_htwo_certqualtxt');
 
   // check if is view
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

    let certQualInview = DivIsInView(h2CertQualTxt);

    if(certQualInview) {
      document.querySelector('.c_wt_tfbht_fw_certqual').classList.add('anim_cqanic');
    }

    // Second anim check
    let secContBubb = document.querySelectorAll('.c_wcsfb_bb');
    let secContTxt = document.querySelector('.cont_wcont_s_fbox_boxwrtxt');
    let secContTxtTxtInView = DivIsInView(secContTxt);

     if(secContTxtTxtInView) {
      for(let i=0; i<secContBubb.length;i++) {
        secContBubb[i].classList.add('cwcbbabbtxt_clsan');
      }
      secContTxt.classList.add('cwctsftxtanim');
     }

    let secMugVap = document.querySelector('.cwct_sfbhcmug_vap');
    let secCoffMug = document.querySelector('.cwct_sfbhcm_wrcimg');
    let secMugVapInView = DivIsInView(secMugVap);

    if(secMugVapInView) {
      secCoffMug.classList.add('cwct_sfwrimg_anim');
      document.querySelector('.cwct_sfbhcm_wrcimg_shd').classList.add('cwct_wrimg_shdwanim');
      document.querySelector('.cwct_sfbhcmug_vap').classList.add('cwct_sfbvapmuganim');
    }
     // Sec anim check - cert qual sect
    let secFwrap = document.querySelector('.c_wt_tfbht_fw_certqual');
    let secfrwaptxt = document.querySelector('.c_wcont_tfboxht_frwaptxt');
    let secContTxtBubb = document.querySelectorAll('.c_wctfbxhtwr_bb');

    let secFwrapInView = DivIsInView(secFwrap);
     if(secFwrapInView) {
      secfrwaptxt.classList.add('cwctfbxfrtxt_anim');

      let scffbimg = document.querySelector('.ctw_tfbht_fwcequal_dincoff');
      let scfffimg = scffbimg.querySelector('img');
          scfffimg.classList.add('cwctfbxfrtxt_anim');

      for(let i=0; i<secContTxtBubb.length;i++) {
        secContTxtBubb[i].classList.add('cwctbx_bbanim');
      }
    }

    /*Fourth container*/
    let fthCardBox = document.querySelector('.cfh_wp_pbox');
    let fthCardBoxes = document.querySelectorAll('.cfh_wp_pbox');
    // Check if is inview
    let fthCardBoxInView = DivIsInView(fthCardBox);

    if(fthCardBoxInView) {
     if(fthCardBox.style.opacity = '0') {
        for(let i=0; i<fthCardBoxes.length;i++) {
          fthCardBoxes[i].style.opacity = '1';
        }
        document.querySelector('.fth_store_btn').classList.add('fvb_an');
      }
    }

    /*Fourth cont animations*/
 
    let fthBeanCoffInView = DivIsInView(fthCardBox);

     if(fthBeanCoffInView) {
      document.querySelector('.ct_wc_fth_beanone').style.right = (scrollValue * 0.05) + 100 + 'px';
      document.querySelector('.ct_wc_fth_beantwo').style.right = (scrollValue * 0.05) - 10 + 'px';
      document.querySelector('.ct_wc_fth_beanthree').style.right = (scrollValue * 0.05) + 50 + 'px';
      document.querySelector('.ct_wc_fth_beanfour').style.right = (scrollValue * 0.10) + 50 + 'px';
      document.querySelector('.ct_wc_fth_beanfive').style.right = (scrollValue * 0.30) + 50 + 'px';
      document.querySelector('.ct_wc_fth_beansix').style.right = (scrollValue * 0.20) + 50 + 'px';
     }

     /*Fifth cotainer animations*/
     let beAmazedTxt = document.querySelector('.fth_ccup_txtf');
     let beAmazedTxtInView = DivIsInView(beAmazedTxt);
     let scrollValue4Txt = (scrollValue * 0.01 - 5);
     if(beAmazedTxtInView) {
        beAmazedTxt.style.left = scrollValue4Txt+'%';
        // Animate coffee cup
        document.querySelector('.cwconfth_conthf_wrapimg').classList.add('cfth_cupimg_acls');
        document.querySelector('.fth_c_cup_shd').classList.add('fth_c_cup_shd_cls');
     }

     let fthContSecSecFHalf = document.querySelector('.c_wconfth_cont_sec');
     let fthContSecSecFHalfCheck = DivIsInView(fthContSecSecFHalf);

     if(fthContSecSecFHalfCheck) {
      document.querySelector('.c_wconfth_ch_txtwr').classList.add('c_wcfth_chtxtwr_cls');
     }
     // Fifth second half - check in view first half
     let fthContSecFHalf = document.querySelector('.c_wconfth_cont_two_hf');
     let fthContSecFHalfInView = DivIsInView(fthContSecFHalf);

     if(fthContSecFHalfInView) {
      document.querySelector('.c_wcc_two_lbubb_f').classList.add('c_wctlb_f_an');
      document.querySelector('.c_wcc_two_lbubb_s').classList.add('c_wctlb_s_an');
      document.querySelector('.c_wcc_two_lbubb_t').classList.add('c_wctlb_t_an');
      document.querySelector('.wc_wc_ct_hf_wrtxt').classList.add('wcc_chf_wrt_anim');
     }

     // Fifth strong coffee img anim
     let fthStrongCoffImg = document.querySelector('.c_wfth_ct_ths_img');
     let fthStrongCoffImgInView = DivIsInView(fthStrongCoffImg);
     
     if(fthStrongCoffImgInView) {
      fthStrongCoffImg.classList.add('cwfth_ctths_cls');
       let scrollValue4Txtz = (scrollValue * 0.07 / 2) - 50;
        fthStrongCoffImg.style.transform = `translateY(-${scrollValue4Txtz}%)`;
     }

     // Fifth third half - check in view
     let fthContThFHalf = document.querySelector('.wccth_hone_txt');
     let fthContThFHalfInView = DivIsInView(fthContThFHalf);

     if(fthContThFHalfInView) {
        document.querySelector('.cwfth_cthr_cb_o').style.left = '20px';
        document.querySelector('.cwfth_cthr_cb_s').style.right = '20px';

        document.querySelector('.wccth_hone_txt').classList.add('wccthhtxtanim');
        document.querySelector('.wccth_hone_txt_with').classList.add('wccthhtxtanim');

        document.querySelector('.wccth_hone_ws_coffbean').classList.add('wccthhtxtanimzz');
        document.querySelector('.sc_sfb_vap_coffrost').classList.add('scsfb_vcfrs_anim');
     }
      document.querySelector('.cwtctfbxht_minbubb_f').classList.add('scsfb_vcfrs_anim');
      document.querySelector('.cwtctfbxht_minbubb_s').classList.add('scsfb_vcfrs_anim');


     // Sixth cont - check in view
     let sthContTxt = document.querySelector('.sth_cont_wrtxt_f');
     let sthContTxtInView = DivIsInView(sthContTxt);

     if(sthContTxtInView) {
      sthContTxt.classList.add('sxthtxtanimzz');
     }

     //  third half - sec half check in view
     let thCoffB = document.querySelector('.cont_wcont_t_fbox_ht_imgwrap').querySelector('img');
     let thCoffBInView = DivIsInView(thCoffB);
     
     if(thCoffBInView) {
      document.querySelector('.cont_wcont_t_fbox_ht_imgwrap').classList.add('cwtfhtiwr');
     }
}


fthMouseMove(e) {
  const el = e.target;
  
    const cardWidth = el.offsetWidth;
    const cardHeight = el.offsetHeight;
    const centerX = el.offsetLeft + cardWidth/2;
    const centerY = el.offsetTop + cardHeight/2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (+1)*5*mouseY/(cardHeight/2);
    const rotateY = (-1)*5*mouseX/(cardWidth/2);

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}




  render() {
    return (
        <div>
      
          <div className='cont_wrap_cont'>
            <div className='cont_wcont_f'>
              <div className='cwcont_f_rowfirst'>
                
              </div>
              <div className='cwcont_f_rowsec'>
                <div className='cwcontf_rowsec_half cwcontf_rowsec_half_f'>
                    <span className='c_sxth_rbg cwc_rohf'></span>
                    <span className='c_rhalf_rbotdrocoff'></span>
                    <div className='cwcont_frf_txtwrap'>
                    <span className='cwcfrftw_of'>DISTINCT COFFEE AROMA</span>
                    
                    <div className='cwcont_frf_txtwrap_sec'>
                      Start your day with a good coffee. The coffee is brewed
                      by first roasting the green coffee beans over hot coals in a brazier.
                    </div>
                    <div className='cwcont_frf_txtwrap_thsoc'>
                       <a href='https://www.facebook.com'><i className="fab fa-facebook"></i>Facebook</a>
                       <a href='https://www.twitter.com'><i className="fab fa-twitter"></i>Twitter</a>
                       <a href='https://www.youtube.com'><i className="fab fa-youtube"></i>Youtube</a>
                    </div>
                    <Link to={'/store'} className='cwcont_rs_hf_order_btn'>SHOP NOW</Link>
                  </div>
                  <span className='cwcont_rs_cb_4'></span>
                  <span className='cwcont_rs_cb_5'></span>
                  <span className='cwcont_rs_cb_6'></span>
                  <span className='cwcont_rs_cb_10'></span>
                </div>

                <div className='cwcontf_rowsec_half cwcontf_rowsec_half_s'>
                  <img src={f_cup_coffee} alt='' className='cwcont_frs_img'/>
                  <span className='cwcont_rs_cb_1'></span>
                  <span className='cwcont_rs_cb_2'></span>
                  <span className='cwcont_rs_cb_3'></span>
                  <span className='sp_cws_bg_one'></span>
                  <span className='sp_cws_bg_two'></span>
                  <span className='sp_cws_bg_three'></span>
                </div>
              </div>
              <span className='cwcont_rs_rb_spacoff'></span>
              <span className='cwcont_rs_cb_7'></span>
            </div>

            {/* SECOND CONTAINER */}
            <div className='cont_wcont_s'>
              <div className='cont_wcont_s_fbox'>
                <div className='cont_wcont_s_fbox_h'>
                  <div className='cont_wcont_s_fbox_h_cmug'>
                    <div className='c_wcont_sfbxhmug_wrap'>
                       <div className='c_wct_sfb_hcmug_vapour cwct_sfbhcmug_vap'>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <span className='cwct_sfbhcm_wrcimg'>
                          <img src={b_coffe_cup} alt=''/>
                        </span>
                        <span className='cwct_sfbhcm_wrcimg_shd'></span>
                    </div>
                  </div>
                  <span className='cwcont_rs_cb_8'></span>
                  <span className='cwcont_rs_cb_9'></span>
                </div>

                <div className='cont_wcont_s_fbox_h cont_wcont_s_fbox_s'>
                  <div className='cont_wcont_s_fbox_box'>
                    <div className='cont_wcont_s_fbox_boxwrtxt'>
                      <span>What is Lorem Ipsum?</span>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      <span>Maecenas eget eleifend dui.</span>
                      <span>Sed consectetur nunc enim, eu mattis tellus molestie sed.</span>
                      <span>Proin id neque auctor</span>

                      <span className='mt-5'>Maecenas eget eleifend dui.</span>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                  </div>
                    <span className='c_wcsfb_bb c_wcsfb_bb_f'></span>
                    <span className='c_wcsfb_bb c_wcsfb_bb_s'></span>
                    <span className='c_wcsfb_bb c_wcsfb_bb_t'></span>
                    <span className='c_wcsfb_bb c_wcsfb_bb_fth'></span>
                    <span className='c_wcsfb_bb c_wcsfb_bb_fith'></span>
                    <span className='c_wcsfb_bb c_wcsfb_bb_sxt'></span>
                    <span className='c_wcsfb_bb c_wcsfb_bb_sv'></span>
                </div>

              </div>
            </div>

             {/* THIRD CONTAINER */}
            <div className='cont_wcont_third'>
              <div className='cont_wcont_t_fbox'>
                <div className='cont_wcont_t_fbox_h'>
                  <div className='cont_wcont_t_fbox_ht_wrap cont_wcont_t_fbox_ht_fwrap'>
                    <span className='cwtctfbxht_minbubb_f'></span>
                    <span className='cwtctfbxht_minbubb_s'></span>
                    <span className='c_wctfbxhtwr_bb c_wctfbxhtwr_bb_f'></span>
                    <span className='c_wctfbxhtwr_bb c_wctfbxhtwr_bb_s'></span>
                    <span className='c_wctfbxhtwr_bb c_wctfbxhtwr_bb_th'></span>
                    <span className='c_wctfbxhtwr_bb c_wctfbxhtwr_bb_fth'></span>
                    <span className='c_wctfbxhtwr_bb c_wctfbxhtwr_bb_fith'></span>
                    <span className='c_wctfbxhtwr_bb c_wctfbxhtwr_bb_sxt'></span>


                    <span className='c_wcont_tfboxht_frwap_dottline'></span>
                    <div className='c_wcont_tfboxht_frwaptxt'>
                      <div className='c_wt_tfbht_fw_certqual'></div>
                      <h2 className='ctwtfbht_htwo_certqualtxt'>Certified Quality</h2>
                      <h3>100% original</h3>
                      <span className='ctwtfbh_txtwarsbstxt'>We are using the best beans for your coffee</span>
                    </div>
                    <div className='ctw_tfbht_fwcequal_dincoff'>
                      <span className='cttfbht_fqdincoff_box'>
                        <img src={multi_coffeebeans} alt=''/>
                      </span>
                    </div>
    
                  </div>
                </div>

                 <div className='cont_wcont_t_fbox_h cont_wcont_t_fbox_htwo'>
                   <div className='cont_wcont_t_fbox_ht_imgwrap'>
                    <img src={th_bcoff_papbag} alt=''/>
                    <span className='c_wctfbox_imgshadow'></span>
                    </div>
                </div>
              </div>
            </div>

              {/* FOURTH CONTAINER */}
              <div className='cont_wcont_fourth'>
                <span className='ct_wc_fth_bgup'></span>

                <div className='cwcont_fh_wrapprod'>
                  <div className='cfh_wp_pbox'>
                    <span className='cfh_wp_pbox_prodbg'></span>
                    <span className='cfh_wp_pbox_prodimg'>
                      <img src={th_bcoff_papbag} className='thbcoff_papbagimg' alt=''/>
                    </span>
                    <div className='cfh_wp_pbox_info'>
                      <span className='cfh_wp_pbox_info_name'>Blackbird coffee</span>
                      <span className='cfh_wp_pbox_info_gr'>350gr</span>
                      <span className='cfh_wp_pbox_info_descr'>
                        Phasellus vel eleifend ante, sed blandit orci. In eleifend convallis semper. Cras quis lacinia felis.
                      </span>
                    </div>
                  </div>

                  <div className='cfh_wp_pbox'>
                    <span className='cfh_wp_pbox_prodbg'></span>
                    <span className='cfh_wp_pbox_prodimg'>
                      <img src={th_bcoff_papbag} className='thbcoff_papbagimg thbc_pbimg_two' alt=''/>
                    </span>
                    <div className='cfh_wp_pbox_info'>
                      <span className='cfh_wp_pbox_info_name'>Blackbird coffee</span>
                      <span className='cfh_wp_pbox_info_gr'>350gr</span>
                      <span className='cfh_wp_pbox_info_descr'>
                        Phasellus vel eleifend ante, sed blandit orci. In eleifend convallis semper. Cras quis lacinia felis.
                      </span>
                    </div>
                  </div>

                  <div className='cfh_wp_pbox'>
                    <span className='cfh_wp_pbox_prodbg'></span>
                    <span className='cfh_wp_pbox_prodimg'>
                      <img src={th_bcoff_papbag} className='thbcoff_papbagimg thbc_pbimg_three' alt=''/>
                    </span>
                    <div className='cfh_wp_pbox_info'>
                      <span className='cfh_wp_pbox_info_name'>Blackbird coffee</span>
                      <span className='cfh_wp_pbox_info_gr'>350gr</span>
                      <span className='cfh_wp_pbox_info_descr'>
                        Phasellus vel eleifend ante, sed blandit orci. In eleifend convallis semper. Cras quis lacinia felis.
                      </span>
                    </div>
                  </div>
                </div>
                  <Link to={'/store'} className='fth_store_btn'>START SHOPPING</Link>
                  <span className='ct_wc_fth_bgdown'></span>
                  <span className='ctwc_fth_obj_one'></span>
                  <span className='ct_wc_fth_bgright'></span>
                  <span className='ct_wc_fth_beanone'></span>
                  <span className='ct_wc_fth_beantwo'></span>
                  <span className='ct_wc_fth_beanthree'></span>
                  <span className='ct_wc_fth_beanfour'></span>
                  <span className='ct_wc_fth_beanfive'></span>
                  <span className='ct_wc_fth_beansix'></span>
              </div>

               {/* FIFTH CONTAINER */}
              <div className='cont_wcont_fifth'>

                <div className='c_wconfth_cont'>
                  <div className='c_wconfth_cont_h c_wconfth_cont_h_f'>
                   <span className='cwconfth_conthf_wrapimg'>
                        <span className='ccfth_cwrimg_cbean_one'></span>
                        <span className='ccfth_cwrimg_cbean_two'></span>
                        <span className='ccfth_cwrimg_cbean_three'></span>
                        <span className='ccfth_cwrimg_cbean_four'></span>
                        <span className='ccfth_cwrimg_cbean_five'></span>
                        <span className='ccfth_cwrimg_cbean_six'></span>
                        <span className='ccfth_cwrimg_cbean_sev'></span>
                        <span className='ccfth_cwrimg_cbean_eigh'></span>
                        <span className='ccfth_cwrimg_shdw_one'></span>
                        <span className='ccfth_cwrimg_shdw_two'></span>
                        <span className='ccfth_cwrimg_shdw_three'></span>
                        <span className='ccfth_cwrimg_shdw_four'></span>
                        <img src={fth_coffee_cup} className='fth_c_cup' alt=''/>
                        <span className='fth_c_cup_shd'></span>
                   </span>
                   <h2 className='fth_ccup_txtf'>Sweet taste</h2>
                  </div>
                  <div className='c_wconfth_cont_h c_wconfth_cont_sec'>
                    <span className='c_wcch_lbg'></span>
                    <div className='c_wconfth_ch_txtwr' onMouseMove={(e)=>this.fthMouseMove(e)}>
                      <span>TASTE IT</span> 
                      <span>and</span>
                      <span><span>FIND</span></span>
                      <span>the</span>
                      <span><span>TRUE</span> COFFEE</span>
                    </div>
                  </div>
                </div>

              {/*Fifth cont - second cont*/}
                <div className='c_wconfth_cont_two'>
                  <span className='c_wcc_two_lbubb_f'></span>
                  <span className='c_wcc_two_lbubb_s'></span>
                  <span className='c_wcc_two_lbubb_t'></span>

                  <div className='c_wconfth_cont_two_h c_wconfth_cont_two_hf'>
                    <div className='wc_wc_ct_hf_wrtxt' onMouseMove={(e)=>this.fthMouseMove(e)}>
                       <span>Healthy</span>
                       <span>Energetic</span>
                       <span>Strong</span>
                    </div>
                  </div>
                  <div className='c_wconfth_cont_two_h c_wconfth_cont_two_hs'>
                    <span className='c_wfth_ct_ths_img c_wfth_ct_ths_img_fs'><span></span></span>
                    <span className='c_wfth_ct_ths_img c_wfth_ct_ths_img_mob'><span></span></span>
                  </div>

                </div>
                {/*Fifth cont - third cont*/}
                 <div className='c_wconfth_cont_three'>
                  <span className='cwfth_cthr_cb_o'></span>
                  <span className='cwfth_cthr_cb_s'></span>
                  <div className='c_wconfth_cont_three_half wc_wccth_h_two'>
                    <div className='wccth_hone_wrsmkbn'>
                      <div className='wccth_hone_ws_sm'>
                        <div className='c_wct_sfb_hcmug_vapour sc_sfb_vap_coffrost'>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <span className='wccth_hone_txt'>Prepared</span>
                        <span className='wccth_hone_txt wccth_hone_txt_with'>with</span>
                      </div>
                      <div className='wccth_hone_ws_coffbean'>
                        <span className='wccth_hws_cb'>L</span>
                        <span className='wccth_hws_cb_imgc'><img src={c_single_bean_cb} alt=''/></span>
                        <span className='wccth_hws_cb'>V</span>
                        <span className='wccth_hws_cb'>E</span>
                      </div>
                    </div>
                    <div className='wccth_fl_eff_up'>
                      <div className='wccth_fl_eff_up_vap'>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                    </div>
                    <div className='wccth_fl_eff'><span></span></div>
                  </div>
                  <span className='thcf_bgafanim'></span>
                 </div>
              </div>

                {/*Sixth container*/}
               <div className='sixth_container'>
                <div className='sth_cont_wrtxt_f'>
                  <ul>
                  <li>Cras quis augue <span>malesuada</span>, placerat leo quis, ullamcorper orci morbi eu <span>efficitur</span> elit.</li>
                  <li>Ut sit amet ultricies tellus, at lacinia enim. Fusce porttitor enim justo</li>
                  <li>Cras viverra facilisis leo. Pellentesque sit <span>amet</span> sollicitudin.</li>
                  <li>Nullam pharetra quam eu egestas convallis</li>
                  <li>Morbi eu <span>efficitur</span> elit</li>

                  <li>Class aptent taciti <span>sociosqu</span> ad litora torquent per conubia nostra</li>
                  <li>Aenean vel mattis dui, ut vulputate <span>sapien</span>. Nulla tincidunt.</li>
                  </ul>
                  <span className='sth_img_cb_f'></span>
                </div>
                <span className='c_sxth_rbg'></span>
               </div>

          </div>
          <span className='c_wrap_endcont_bg'></span>

        </div>
      )
  }
}



export default Home;
