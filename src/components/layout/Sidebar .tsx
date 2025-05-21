import { FaBars } from "react-icons/fa"
import logo from "../../assets/images/logo.png"
import brand from "../../assets/images/brand.png"
import { Link } from "react-router-dom"
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="container sidebar__container">
          <div className="sidebar__icon">
            <FaBars />
          </div>
          <Link to="/" className="sidebar__logo">
            <img src={logo} alt="logo" className="sidebar__logo-img" />
            <img src={brand} alt="brand" className="sidebar__logo-brand" />
          </Link>
        </div>
    </div>
  )
}

export default Sidebar 