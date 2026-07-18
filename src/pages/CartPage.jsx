import Cart from '../components/Cart'

const CartPage = (props) => {
  const {cart, increaseQuantity, decreaseQuantity, removeItem} = props
  return (
    <div className="cart-page">
      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />
    </div>
  );
};

export default CartPage;