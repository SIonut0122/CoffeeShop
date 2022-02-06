
import React             from 'react';
import contact_coffe_img from '../media/contact/right_coff_img.png';
import GoogleMapReact    from 'google-map-react';
import '../css/Contact.css';



class Contact extends React.Component {
    state = {
           center : {lat: 44.421143, lng: 26.093942},
           zoom   : 9,
  }

componentDidMount() {
  // Hightlight 'about' nav btn
  document.querySelector('.hwnav_contact').classList.add('hnava_active');
  // Close hdropmobmenu if is active
  if(document.querySelector('.head_dropmobmenu').classList.contains('hdrop_open')) {
    document.querySelector('.head_dropmobmenu').classList.remove('hdrop_open');
  }
}

componentWillUnmount() {
  // Remove highlighted 'about' btn
  document.querySelector('.hwnav_contact').classList.remove('hnava_active');
}

  render() {
    return (
        <div>
          <div className='contact_main'>
              <div className='contact_upgentitle'>
                <span>Contact</span>
                <span></span>
              </div>
            <div className='contact_main_wrap'>
              <div className='contact_mwr_half contact_mwrh_f'>
                <span className='st_mrwh_leftbubb'>
                  <span className='st_mrwh_leftbubb_sec'></span>
                  <span className='st_mrwh_leftbubb_th'></span>
                </span>

                <span className='op_h_titxt contact_deftitle ct_deftit_first'>Opening hours</span>
                <div className='op_h_txt_wraph'>
                  <div><span>Monday</span><span>closed</span></div>
                  <div><span>Tuesday</span><span>09:00am - 23:00pm</span></div>
                  <div><span>Wednesday</span><span>09:00am - 23:00pm</span></div>
                  <div><span>Thursday</span><span>09:00am - 23:00pm</span></div>
                  <div><span>Friday</span><span>09:00am - 23:00pm</span></div>
                  <div><span>Saturday</span><span>10:00am - 24:00pm</span></div>
                  <div><span>Sunday</span><span>10:00am - 22:00pm</span></div>
                </div>
                <span className='oph_txtwr_phone mt-5'><i className="fas fa-phone"></i>888-256 256 2555</span>
                <span className='oph_txtwr_phone'><i className="fas fa-phone"></i>888-322 367 2777</span>
              </div>
              <div className='contact_mwr_half contact_mwrh_s'>
                <img src={contact_coffe_img} alt=''/>
              </div>
            </div>

            {/*Google map location*/}
            <div className='contact_main_wrap_sec'>
              <span className='op_h_titxt contact_deftitle'>Visit us</span>
              
              <div className='contact_mainwrap_maploc'>
                <GoogleMapReact
                    bootstrapURLKeys = {{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
                    defaultCenter    = {this.state.center}
                    defaultZoom      = {this.state.zoom}>
                </GoogleMapReact>
              </div>
              <div className='contact_mainwrsec_addr'>
                <i className="fas fa-map-marker-alt"></i>
                Covaci 4 street, Bucharest 030167
              </div>
            </div>

            {/*Send a message*/}

            <div className='contact_sendmsg_cont'>
              <span className='op_h_titxt contact_deftitle'>Send us a message</span>
              <div className='ct_sendmsg_wrap'>
                <span className='ct_smsg_name_wr'>
                  <span className='ct_smsg_name_wr_insidewr'>
                    <input placeholder='Your name:' type='text'/>
                  </span>
                  <span className='ct_smsg_name_wr_insidewr'>
                    <input placeholder='Your mail:' type='text'/>
                  </span>
                </span>
                <span className='ct_smsg_wrct ct_smsg_subj_wr'>
                  <input placeholder='Enter your subject:' type='text'/>
                </span>
                <span className='ct_smsg_wrct ct_smsg_msg_wr'>
                  <textarea placeholder='Your message:'></textarea>
                </span>

                <span className='ct_sendmsg_btnact'>Send message</span>
              </div>
            </div>

            {/*Social*/}
            <div className='contact_social_cont'>
              <div className='ct_social_wrap'>
                <a href='http://www.facebook.com' className='c_soci_wricon'><i className="fab fa-facebook-f"></i></a>
                <a href='http://www.twitter.com' className='c_soci_wricon'><i className="fab fa-twitter"></i></a>
                <a href='http://www.linkedin.com' className='c_soci_wricon'><i className="fab fa-linkedin-in"></i></a>
                <a href='http://www.youtube.com' className='c_soci_wricon'><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <span className='c_wrap_endcont_bg'></span>
        </div>
      )
  }
}



export default Contact;
