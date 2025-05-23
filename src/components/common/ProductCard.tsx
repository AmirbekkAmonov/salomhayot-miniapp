function ProductCard({ product }: { product: any }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <h3 className="product-card__name">{product.name}</h3>
    </div>
  )
}

export default ProductCard