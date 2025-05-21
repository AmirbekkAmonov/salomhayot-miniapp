import { FaBars } from "react-icons/fa"
import logoLight from "../../assets/images/logo.png"
import logoDark from "../../assets/images/logo.svg"
import brandLight from "../../assets/images/brand.png"
import brandDark from "../../assets/images/brand.svg"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Sidebar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <div className="sidebar">
      <div className="container sidebar__container">
        <div className="sidebar__icon">
          <FaBars color="var(--primary-color)" />
        </div>
        <Link to="/" className="sidebar__logo">
          <img src={isDark ? logoLight : logoDark} alt="logo" className="sidebar__logo-img" />
          <img
            src={isDark ? brandLight : brandDark}
            alt="brand"
            className="sidebar__logo-brand"
          />
        </Link>
      </div>
    </div>
  );
}


export default Sidebar 