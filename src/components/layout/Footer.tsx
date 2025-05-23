import {PhoneOutlined } from '@ant-design/icons';
import { FaTelegram, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import appStore from '../../assets/images/appstore-logo.svg';
import googlePlay from '../../assets/images/playmarket-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__communication">
          <div className="footer__communication-left">
            <h3>Biz bilan bog'laning</h3>
            <a href="tel:+998553033000"><PhoneOutlined className='footer__communication-icon' /> +998 55 303 30 00</a>
            <a href="tel:+998783333833"><PhoneOutlined className='footer__communication-icon' /> +998 78 333 38 33</a>
          </div>
          <div className="footer__communication-right">
            <Link to="https://t.me/salom_hayot_uzb" target='_blank' className='footer__communication-icon-link'><FaTelegram className='footer__communication-icon' /></Link>
            <Link to="https://www.instagram.com/salomhayot/" target='_blank' className='footer__communication-icon-link'><FaInstagram className='footer__communication-icon' /></Link>
          </div>
        </div>
        <div className='footer__dawnload'>
          <Link to="https://play.google.com/store/apps/details?id=uz.salomhayot.salomhayot&pcampaignid=web_share" target='_blank'>
            <img src={googlePlay} alt="google play" />
          </Link>
          <Link to="https://apps.apple.com/uz/app/salom-hayot/id6742028451" target='_blank'>
            <img src={appStore} alt="app store" />
          </Link>
        </div>
        <p className='footer__copyright'>© Barcha huquqlar himoyanlgan</p>
      </div>
    </footer>
  )
}

export default Footer