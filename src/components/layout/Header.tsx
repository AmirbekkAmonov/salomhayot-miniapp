import { FaHome, FaThList, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom"
function Header() {
    return (
        <header>
            <div className="container header__container">
                    <NavLink to="/" className="header__btn">
                        <FaHome color='var(--primary-color)' className='header__btn-icon' />
                        <span>Bosh sahifa</span>
                    </NavLink>
                    <NavLink to="/catalog" className="header__btn">
                        <FaThList color='var(--primary-color)' className='header__btn-icon' />
                        <span>Katalog</span>
                    </NavLink>
                    <NavLink to="/cart" className="header__btn">
                        <FaShoppingCart color='var(--primary-color)' className='header__btn-icon' />
                        <span>Savat</span>
                    </NavLink>
                    <NavLink to="/favorites" className="header__btn">
                        <FaHeart color='var(--primary-color)' className='header__btn-icon' />
                        <span>Sevimli</span>
                    </NavLink>
                    <NavLink to="/profile" className="header__btn">
                        <FaUser color='var(--primary-color)' className='header__btn-icon' />
                        <span>Profil</span>
                    </NavLink>
                </div>
        </header>
    )
}

export default Header