const ProductCard = ({product, onAddToCart}) => {
  const {title, image, price, description} = product
  return (
    <div className="product-item-card">
      <h5 className="product-item-title">{title}</h5>
      <img
        className="product-item-image"
        src={image}
        alt={title}
      />
      <p className="product-item-description">{description}</p>
      <p className="product-item-price">${price}</p>
      <button
        className="product-item-button"
        onClick={() => onAddToCart(product)}
      >Add cart 🛒
      </button>
    </div>
  );
};

export default ProductCard;