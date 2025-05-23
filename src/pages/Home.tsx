import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import { RightOutlined } from '@ant-design/icons';
import banner1 from '../assets/images/carousel1.jpg';
import banner2 from '../assets/images/carousel2.jpg';
import banner3 from '../assets/images/carousel3.jpg';
import banner4 from '../assets/images/carousel4.jpg';
import CategoryCard from '../components/common/CategoryCard';
import Tv from '../assets/images/tv.jpg';
import Gadgets from '../assets/images/gadgets.jpg';
import Texnika from '../assets/images/texnika.jpg';
import ProductCard from '../components/common/ProductCard';
import { Link } from 'react-router-dom';
import { useProductStore } from '../hooks/useProductHooks';

function Home() {
  const { toggleLike, isLiked } = useProductStore();
  const { toggleCartItem, isInCart } = useProductStore();
  const categories = [
    { id: 1, name: 'Televizorlar', image: Tv },
    { id: 2, name: 'Iphone', image: Gadgets },
    { id: 3, name: 'Audiotexnika va Wi-Fi', image: Texnika },
    { id: 4, name: 'Kompyuterlar', image: Tv },
    { id: 5, name: 'Telefonlar', image: Gadgets },
    { id: 6, name: 'Smartfonlar', image: Texnika },
    { id: 7, name: 'Smartwatchlar', image: Tv },
    { id: 8, name: 'Texnika', image: Gadgets },
    { id: 9, name: 'Oyin', image: Tv },
    { id: 10, name: 'Avtomobil', image: Gadgets },
  ];
  const products = [
    { id: 1, category: 'Smartfonlar', name: 'Apple iPhone 16 Plus Pink 128GB', image: false, monthprice: "989 963 so'm oyiga ", oldprice: "11 704 000 so'm " },
    { id: 2, category: 'Iphone', name: 'Iphone', image: Gadgets, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 3, category: 'Audiotexnika va Wi-Fi', name: 'Audiotexnika va Wi-Fi', image: Texnika, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 4, category: 'Smartfonlar', name: 'Apple iPhone 16 Plus Pink 128GB', image: false, monthprice: "989 963 so'm oyiga ", oldprice: "11 704 000 so'm " },
    { id: 5, category: 'Smartfonlar', name: 'Apple iPhone 16 Plus Pink 128GB', image: true, monthprice: "989 963 so'm oyiga ", oldprice: "11 704 000 so'm " },
    { id: 6, category: 'Changyutkich', name: 'Changyutkich', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 7, category: 'Kiyimlar', name: 'Kiyimlar', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 8, category: 'Kiyimlar', name: 'Kiyimlar', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 9, category: 'Kir yuvish mashinasi', name: 'Kir yuvish mashinasi', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 10, category: 'Kiyimlar', name: 'Kiyimlar', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
  ];
  const smartphones = [
    { id: 1, category: 'Smartfonlar', name: 'Apple Watch Series 8', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 2, category: 'Smartfonlar', name: 'Realme 10 Pro', image: true, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 3, category: 'Smartfonlar', name: 'Apple Watch Series 8', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 4, category: 'Smartfonlar', name: 'Honor 90', image: true, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 5, category: 'Smartfonlar', name: 'Samsung', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 6, category: 'Smartfonlar', name: 'Redmi 10', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 7, category: 'Smartfonlar', name: 'Samsung', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 8, category: 'Smartfonlar', name: 'Realme 10', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 9, category: 'Smartfonlar', name: 'Samsung', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
    { id: 10, category: 'Smartfonlar', name: 'Poco X5 Pro', image: false, monthprice: "1000000 so'm oyiga", oldprice: "1500000 so'm" },
  ];
  const homeAppliances = [
    { id: 1, category: 'Home Appliances', name: 'Samsung Refrigerator', image: false, monthprice: "1 200 000 so'm oyiga", oldprice: "18 000 000 so'm" },
    { id: 2, category: 'Home Appliances', name: 'LG Washing Machine', image: false, monthprice: "900 000 so'm oyiga", oldprice: "13 500 000 so'm" },
    { id: 3, category: 'Home Appliances', name: 'Philips Microwave Oven', image: false, monthprice: "400 000 so'm oyiga", oldprice: "6 000 000 so'm" },
    { id: 4, category: 'Home Appliances', name: 'Bosch Dishwasher', image: false, monthprice: "1 500 000 so'm oyiga", oldprice: "22 500 000 so'm" },
    { id: 5, category: 'Home Appliances', name: 'Samsung Air Conditioner', image: false, monthprice: "1 800 000 so'm oyiga", oldprice: "27 000 000 so'm" },
    { id: 6, category: 'Home Appliances', name: 'Xiaomi Robot Vacuum', image: false, monthprice: "600 000 so'm oyiga", oldprice: "9 000 000 so'm" },
    { id: 7, category: 'Home Appliances', name: 'Delonghi Coffee Maker', image: false, monthprice: "350 000 so'm oyiga", oldprice: "5 250 000 so'm" },
    { id: 8, category: 'Home Appliances', name: 'Tefal Electric Kettle', image: false, monthprice: "150 000 so'm oyiga", oldprice: "2 250 000 so'm" },
    { id: 9, category: 'Home Appliances', name: 'Samsung Dryer', image: false, monthprice: "1 000 000 so'm oyiga", oldprice: "15 000 000 so'm" },
    { id: 10, category: 'Home Appliances', name: 'LG Vacuum Cleaner', image: false, monthprice: "500 000 so'm oyiga", oldprice: "7 500 000 so'm" },
  ];
  
  return (
    <section className="home">
      <div className="container home__container">
       <div className="home__banner">
       <Carousel autoplay dots>
          <div>
            <img src={banner1} alt="Banner 1" className="home__banner-img" />
          </div>
          <div>
            <img src={banner2} alt="Banner 1" className="home__banner-img" />
          </div>
          <div>
            <img src={banner3} alt="Banner 1" className="home__banner-img" />
          </div>
          <div>
            <img src={banner4} alt="Banner 1" className="home__banner-img" />
          </div>
        </Carousel>
       </div>
        <div className="home__categories">
          <h1 className="home__title">Kategoriyalar</h1>
          <div className="home__categories-cards">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
          </div>
        </div>
        <div className="home__products">
          <div className="home__products-title">
            <Link to="/products" className="home__title">Iphone <RightOutlined /></Link>
            <Link to="/products" className="home__products-link">Barchasini ko'rish <RightOutlined /></Link>
          </div>
          <div className="home__products-cards">
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} isLiked={isLiked(product.id)} isAddedToCart={isInCart(product.id)} onLike={() => toggleLike(product.id)} onAddToCart={() => toggleCartItem(product.id)} />
            ))}
          </div>
          <button className="home__products-button">Barchasini ko'rish</button>
        </div>
        <div className="home__products">
          <div className="home__products-title">
            <Link to="/products" className="home__title">Smartfonlar <RightOutlined /></Link>
            <Link to="/products" className="home__products-link">Barchasini ko'rish <RightOutlined /></Link>
          </div>
          <div className="home__products-cards">
            {smartphones.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} isLiked={isLiked(product.id)} isAddedToCart={isInCart(product.id)} onLike={() => toggleLike(product.id)} onAddToCart={() => toggleCartItem(product.id)} />
            ))}
          </div>
          <button className="home__products-button">Barchasini ko'rish</button>
        </div>
        <div className="home__products">
          <div className="home__products-title">
            <Link to="/products" className="home__title">Uy texnikalari<RightOutlined /></Link>
            <Link to="/products" className="home__products-link">Barchasini ko'rish <RightOutlined /></Link>
          </div>
          <div className="home__products-cards">
            {homeAppliances.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} isLiked={isLiked(product.id)} isAddedToCart={isInCart(product.id)} onLike={() => toggleLike(product.id)} onAddToCart={() => toggleCartItem(product.id)} />
            ))}
          </div>
          <button className="home__products-button">Barchasini ko'rish</button>
        </div>
      </div>
    </section>
  );
}

export default Home;