import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import banner1 from '../assets/images/carousel1.jpg';
import banner2 from '../assets/images/carousel2.jpg';
import banner3 from '../assets/images/carousel3.jpg';
import banner4 from '../assets/images/carousel4.jpg';
import CategoryCard from '../components/common/CategoryCard';
import Tv from '../assets/images/tv.jpg';
import Gadgets from '../assets/images/gadgets.jpg';
import Texnika from '../assets/images/texnika.jpg';
import ProductCard from '../components/common/ProductCard';

function Home() {
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
    { id: 1, name: 'Televizorlar', image: Tv },
    { id: 2, name: 'Iphone', image: Gadgets },
    { id: 3, name: 'Audiotexnika va Wi-Fi', image: Texnika },
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
          <h1 className="home__title">Maxsulotlar</h1>
          <div className="home__products-cards">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;