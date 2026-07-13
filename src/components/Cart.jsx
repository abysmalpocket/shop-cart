const Cart = ({cart, increaseQuantity, decreaseQuantity, removeItem}) => {
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>🛒 Корзина</h2>
        <p className="cart-empty">Корзина пуста</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>🛒 Корзина</h2>
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