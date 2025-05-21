import { Routes, Route } from "react-router-dom"
import Favorites from "../pages/Favorites"
import Cart from "../pages/Cart"
import Catalog from "../pages/Catalog"
import Home from "../pages/Home"
import Layout from "../components/layout"
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
            </Route>
        </Routes>
    )
}

export default AppRouter