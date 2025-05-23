import { FaHome, FaThList, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { NavLink, useLocation } from "react-router-dom"
import type { NavLinkProps } from "react-router-dom";
import { motion } from 'framer-motion';
import { useRef, useLayoutEffect, useState, forwardRef } from 'react';
import { useProductStore } from '../../hooks/useProductHooks';

const navs = [
    { to: '/', label: 'Bosh sahifa', icon: <FaHome /> },
    { to: '/catalog', label: 'Katalog', icon: <FaThList /> },
    { to: '/cart', label: 'Savat', icon: <FaShoppingCart /> },
    { to: '/favorites', label: 'Sevimli', icon: <FaHeart /> },
    { to: '/profile', label: 'Profil', icon: <FaUser /> },
];

const NavButton = forwardRef<HTMLAnchorElement, NavLinkProps & { children: React.ReactNode }>(
  ({ children, ...props }, ref) => (
    <NavLink {...props} ref={ref} >{children}</NavLink>
  )
);

function Header() {
    const location = useLocation();
    const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [bgStyle, setBgStyle] = useState<{ left: number, width: number } | null>(null);
    const { likedItems, cartItems } = useProductStore();
  
    useLayoutEffect(() => {
      const idx = navs.findIndex(n => n.to === location.pathname);
      const btn = btnRefs.current[idx];
      if (btn) {
        window.requestAnimationFrame(() => {
          setBgStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
        });
      }
    }, [location.pathname]);
  
    return (
      <header>
        <div className="container header__container" style={{ position: 'relative' }}>
          {bgStyle && (
            <motion.div
              className="header__active-bg"
              layout
              initial={false}
              animate={{ left: bgStyle.left, width: bgStyle.width }}
              transition={{ type: 'tween', duration: 0.18, ease: 'easeInOut' }}
            />
          )}
          {navs.map((nav, i) => (
            <NavButton
              key={nav.to}
              to={nav.to}
              className={({ isActive }: any) => `header__btn${isActive ? ' active' : ''}`}
              ref={el => { btnRefs.current[i] = el; }}
            >
              <span className='header__btn-icon'>{nav.icon}</span>
              <span>{nav.label}</span>
              {nav.to === '/cart' && cartItems.length > 0 && (
                <span className="header__count">{cartItems.length}</span>
              )}
              {nav.to === '/favorites' && likedItems.length > 0 && (
                <span className="header__count">{likedItems.length}</span>
              )}
            </NavButton>
          ))}
        </div>
      </header>
    )
  }
  

export default Header