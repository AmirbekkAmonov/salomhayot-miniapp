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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} isLiked={isLiked(product.id)} isAddedToCart={isInCart(product.id)} onLike={() => toggleLike(product.id)} onAddToCart={() => toggleCartItem(product.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;