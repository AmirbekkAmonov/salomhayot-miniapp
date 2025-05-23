import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';
import noImageLight from '../../assets/images/logolight.svg';
import noImageDark from '../../assets/images/logodark.svg';
import { useThemeStore } from '../../hooks/ThemeContext';
import { Link } from 'react-router-dom';
function formatPrice(price: string) {
  const regex = /(\d+)(.*)/;
  const match = price.match(regex);

  if (!match) return price;

  const numberPart = match[1];
  const textPart = match[2];

  const formattedNumber = Number(numberPart).toLocaleString('ru-RU');

  return formattedNumber + textPart;
}

function ProductCard({
  product,
  isLiked,
  isAddedToCart,
  onLike,
  onAddToCart,
}: {
  product: any;
  isLiked: boolean;
  isAddedToCart: boolean;
  onLike: () => void;
  onAddToCart: () => void;
}) {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const imageExists = product.image && product.image.length > 0;
  return (
    <div className="product-card">
      {imageExists ? (
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="product-card__image" />
        </Link>
      ) : (
        <div className="product-card__image-placeholder">
          <img src={isDark ? noImageDark : noImageLight} alt={product.name} className="product-card__image" />
          <p>SALOM HAYOT</p>
        </div>
      )}
      {isLiked ? (
        <HeartFilled className="product-card__like fill-liked" onClick={onLike} />
      ) : (
        <HeartOutlined className="product-card__like" onClick={onLike} />
      )}
      <div className="product-card__info">
        <Link to={`/product/${product.id}`}>
          <div className="product-card__category">{product.category}</div>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
        <div className="product-card__price">
          <Link to={`/product/${product.id}`} className="product-card__price-new">{formatPrice(product.monthprice)}</Link>
          <div className="product-card__price-old">
            <span className="product-card__price-old-price">{formatPrice(product.oldprice)}</span>
            {isAddedToCart ? (
              <MdShoppingCart
                className="product-card__price-old-icon"
                style={{ color: "green", cursor: "pointer" }}
                onClick={onAddToCart}
              />
            ) : (
              <MdOutlineShoppingCart
                className="product-card__price-old-icon"
                style={{ cursor: "pointer" }}
                onClick={onAddToCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
