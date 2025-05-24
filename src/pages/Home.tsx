import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import { RightOutlined } from '@ant-design/icons';
import banner1 from '../assets/images/carousel1.jpg';
import banner2 from '../assets/images/carousel2.jpg';
import banner3 from '../assets/images/carousel3.jpg';
import banner4 from '../assets/images/carousel4.jpg';
import CategoryCard from '../components/common/CategoryCard';
import ProductCard from '../components/common/ProductCard';
import { Link } from 'react-router-dom';
import { useProductStore } from '../hooks/useProductHooks';
import { products, categories } from '../data/products';

function Home() {
  const { toggleLike, isLiked, toggleCartItem, isInCart } = useProductStore();

  // Har bir mahsulot uchun unik key
  const getProductKey = (product: any) => `${product.category}-${product.id}`;

  // Filtirlovchi funksiya
  const renderCategoryProducts = (categoryName: string, title: string) => {
    const filtered = products.filter(p => p.category === categoryName);

    if (filtered.length === 0) return null;

    return (
      <div className="home__products">
        <div className="home__products-title">
          <Link to="/products" className="home__title">{title} <RightOutlined /></Link>
          <Link to="/products" className="home__products-link">Barchasini ko'rish <RightOutlined /></Link>
        </div>
        <div className="home__products-cards">
          {filtered.slice(0, 10).map((product) => {
            const key = getProductKey(product);
            return (
              <ProductCard
                key={key}
                product={product}
                isLiked={isLiked(key)}
                isAddedToCart={isInCart(key)}
                onLike={() => toggleLike(key)}
                onAddToCart={() => toggleCartItem(key)}
              />
            );
          })}
        </div>
        <button className="home__products-button">Barchasini ko'rish</button>
      </div>
    );
  };

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__banner">
          <Carousel autoplay dots>
            <div><img src={banner1} alt="Banner 1" className="home__banner-img" /></div>
            <div><img src={banner2} alt="Banner 2" className="home__banner-img" /></div>
            <div><img src={banner3} alt="Banner 3" className="home__banner-img" /></div>
            <div><img src={banner4} alt="Banner 4" className="home__banner-img" /></div>
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

        {renderCategoryProducts('Iphone', 'Iphone')}
        {renderCategoryProducts('Smartfonlar', 'Smartfonlar')}
        {renderCategoryProducts('Home Appliances', 'Uy texnikalari')}
      </div>
    </section>
  );
}

export default Home;
