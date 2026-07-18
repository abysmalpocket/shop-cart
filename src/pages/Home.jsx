import FindProductsInput from "../components/FindProductsInput.jsx";
import ProductList from "../components/ProductList.jsx";

const Home = (props) => {
  const {products, searchTerm, setSearchTerm, onAddToCart} = props
  return (
    <div>
      <FindProductsInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ProductList
        products={products}
        onAddToCart={onAddToCart}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Home;