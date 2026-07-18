import { Link } from 'react-router-dom';

const Cart = ({cart, increaseQuantity, decreaseQuantity, removeItem}) => {
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Cart is empty ☹️</h2>
        <p>But you can always choose products on the home page</p>
        <Link to="/" className="continue-shopping">Go to products</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div
            key={item.id}
            className="cart-item"
          >
            <span className="cart-item-title">{item.title}</span>
            <span className="cart-item-quantity">x {item.quantity}</span>
            <div className="cart-item-actions">
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>−</button>
              <button
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                🗑️
              </button>
            </div>
            <span className="cart-item-price">${item.price}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        Итого: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
    </div>
  );
};

export default Cart;