import { Routes, Route } from "react-router-dom"
import Favorites from "../pages/Favorites"
import Basket from "../pages/Basket"
import Catalog from "../pages/Catalog"
import Home from "../pages/Home"
import Layout from "../components/layout"
import ProductDetail from "../pages/ProductDetail"
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
        </Routes>
    )
}   

export default AppRouter