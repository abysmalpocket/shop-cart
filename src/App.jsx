import {useState, useEffect} from "react";
import '../src/styles/normalize.css'
import '../src/styles/styles.css'
import {Link} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CartPage from "./pages/CartPage.jsx";
import {Routes, Route, Navigate} from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch the products');
        }
        return response.json();
      })
      .then((products) => {
        setProducts(products)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (<p>error: {error.message}</p>)
  }

  const onAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item => item.id === product.id ? {
          ...item,
          quantity: item.quantity + 1
        } : item)
      } else {
        return [...prevCart, {...product, quantity: 1}];
      }
    })
  }

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map(item => item.id === id ? {
        ...item,
        quantity: item.quantity + 1
      } : item)
    })
  }

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map(item => item.id === id ? {
        ...item,
        quantity: item.quantity - 1
      } : item).filter(item => item.quantity > 0)
    })
  }

  const removeItem = (id) => {
    setCart((prevCart) => {
      return prevCart.filter(item => item.id !== id)
    })
  }

  return (<div className="main__container">
      <h1 className="main__container-title">🛒 Online store</h1>

      <nav className="main__container-navmenu">
        <Link to="/">Main page</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home
            products={products}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onAddToCart={onAddToCart}
          />}
        />
        <Route
          path="/cart"
          element={<CartPage
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />}
        />
        <Route
          path="*"
          element={<Navigate
            to="/"
            replace
          />}
        />
      </Routes>
    </div>
  );
};

export default App;