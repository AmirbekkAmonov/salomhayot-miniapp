import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar "

function Layout() {
  return (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout