import { useProductStore } from '../hooks/useProductHooks';
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { products } from '../data/products';

function Basket() {
  const { cartItems, toggleCartItem, toggleLike, isLiked } = useProductStore();

  const cartProducts = products.filter((product) => {
    const key = `${product.category}-${product.id}`;
    return cartItems.includes(key);
  });

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    cartProducts.forEach((product) => {
      const key = getKey(product);
      initialQuantities[key] = quantities[key] || 1;
    });
    setQuantities(initialQuantities);
  }, [cartProducts.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getKey = (product: any) => `${product.category}-${product.id}`;

  const formatToNumber = (price: string) =>
    Number(price.replace(/\s/g, '').replace(/so'm/g, ''));

  const formatToCurrency = (num: number) =>
    num.toLocaleString('uz-UZ') + " so'm";

  const totalPrice = cartProducts.reduce((acc, product) => {
    const key = getKey(product);
    const quantity = quantities[key] || 1;
    const unitPrice = formatToNumber(product.oldprice);
    return acc + unitPrice * quantity;
  }, 0);

  return (
    <section className="basket">
      <div className="container basket__container">
        <h3 className="basket__title">Savatcha</h3>
        {cartProducts.length === 0 ? (
          <div className="basket__empty">
            <ShoppingCartOutlined className="basket__empty-icon" />
            <p className="basket__empty-text">Savatchada mahsulotlar mavjud emas</p>
          </div>
        ) : (
          <>
            <div className="basket__products">
              {cartProducts.map((product) => {
                const key = getKey(product);
                const liked = isLiked(key);
                const quantity = quantities[key] || 1;
                const unitPrice = formatToNumber(product.oldprice);
                const itemTotal = unitPrice * quantity;

                return (
                  <div key={key} className="basket__product">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="basket__product-image"
                    />
                    <div className="basket__product-info">
                      <div className="basket__product-info-left">
                        <div className="basket__product-category">{product.category}</div>
                        <div className="basket__product-name">{product.name}</div>
                        <div className="basket__product-price">{formatToCurrency(itemTotal)}</div>
                      </div>
                      <div className="basket__product-quantity">
                        <button
                          className="basket__product-quantity-control-button"
                          onClick={() =>
                            setQuantities((q) => ({
                              ...q,
                              [key]: Math.max(1, (q[key] || 1) - 1),
                            }))
                          }
                        >
                          -
                        </button>
                        <span className="basket__product-quantity-control-button control-button-quantity">
                          {quantity}
                        </span>
                        <button
                          className="basket__product-quantity-control-button"
                          onClick={() =>
                            setQuantities((q) => ({
                              ...q,
                              [key]: (q[key] || 1) + 1,
                            }))
                          }
                        >
                          +
                        </button>
                      </div>

                      <div className="basket__product-actions">
                        <button
                          onClick={() => toggleLike(key)}
                          className={`basket__like-btn ${liked ? 'basket__like-btn--active' : ''}`}
                          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          {liked ? <HeartFilled /> : <HeartOutlined />}
                        </button>
                        <button
                          onClick={() => toggleCartItem(key)}
                          aria-label="Mahsulotni o'chirish"
                        >
                          <DeleteOutlined className="basket__product-actions-delete" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="basket__summary">
              <h4>Buyurtmangiz</h4>
              <div className='basket__summary-info'>
                <div className='basket__summary-info-item'>
                  <p>Mahsulotlar({cartProducts.length})</p>
                  <p>{formatToCurrency(totalPrice)}</p>
                </div>
                <div className='basket__summary-info-item'>
                  <p>Yetkazib berish</p>
                  <p>15 000 so'm</p>
                </div>
                <div className='basket__summary-info-item'>
                  <p className='basket__summary-info-item-total'>Jami:</p>
                  <p className='basket__summary-info-item-total-price'>{formatToCurrency(totalPrice + 15000)}</p>
                </div>
                <button className='basket__summary-button'>Buyurtma berish</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Basket;
