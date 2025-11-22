
import CartCard from "./CartCard";
import React from 'react';

export default function CartContainer({ cart, handleRemoveFromCart, onEmptyCart, onCheckout, onUpdateQuantity, }) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity * item.currentPrice), 0);
  
  const handleCheckoutClick = () => {
    if (cart.length > 0) {
      onCheckout();
    } else {
      alert("Your cart is empty!");
    }
  };
  
  return (
    <div className="CartContainer">
      <h2>Cart item: {cart.length} </h2>
      
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              {...item}
              image={item.image}
              handleRemoveFromCart={handleRemoveFromCart}
                onUpdateQuantity={onUpdateQuantity}
            />
          ))}
          
          <div className="CartListBtns">
            <button onClick={onEmptyCart}>
              Empty Cart
            </button>
            <button onClick={handleCheckoutClick}>
              Checkout - ${totalPrice.toFixed(2)}
            </button>
          </div>
        </>
      )}
    </div>
  );
}