import { useProductStore } from '../hooks/useProductHooks';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { DropboxOutlined  } from '@ant-design/icons';
import { useEffect } from 'react';
function Favorites() {
  const { likedItems, toggleLike, isLiked, toggleCartItem, isInCart } = useProductStore();

  // Like bosilgan mahsulotlarni filtrlash
  const favoriteProducts = products.filter((product: any) => {
    const key = `${product.category}-${product.id}`;
    return likedItems.includes(key);
  });

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return (
    <section className="favorites">
      <div className="container favorites__container">
        <h3>Sevimlilar</h3>
        {favoriteProducts.length === 0 ? (
          <div className="favorites__empty">
            <DropboxOutlined   className="favorites__empty-icon" />
            <p>Sevimli mahsulotlar mavjud emas</p>
          </div>
        ) : (
          <div className="favorites__products">
            {favoriteProducts.map((product) => {
              const key = `${product.category}-${product.id}`;
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
        )}
      </div>
    </section>
  );
}

export default Favorites;
