import ProductCard from "./ProductCard.jsx";

const ProductList = (props) => {
  const {
    products,
    onAddToCart,
    searchTerm
  } = props

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  if (filteredProducts.length === 0) {
    return <p className="no-products">Ничего не найдено 😕</p>;
  }

  return (
    <ul className="container__product-list">
      {filteredProducts.map((product) => (
        <li
          className='container__product-item'
          key={product.id}
        >
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;