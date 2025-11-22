

import React from 'react';

export default function CartCard({
  id,
  product,
  quantity,
  currentPrice,
  image,
  handleRemoveFromCart,
   onUpdateQuantity, 
}) {
  const totalPrice = quantity * currentPrice;

  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <img
          src={image}
          alt={product}
          style={{ width: "60px", height: "50px" }}
        />
        <h4>{product}</h4>
        <p>${currentPrice.toFixed(2)} each</p>

        
        <div className="quantity-controls">
          <button onClick={() => onUpdateQuantity(id, quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onUpdateQuantity(id, quantity + 1)}>+</button>
        </div>

        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <button
        className="RemoveButton"
        onClick={() => handleRemoveFromCart({ id, product, quantity, currentPrice })}
      >
        Remove
      </button>
    </div>
  );
}