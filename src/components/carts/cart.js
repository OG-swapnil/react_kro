import React, { useContext } from "react";
import { ShopContext } from "./ShopContext"; // Ensure correct import of ShopContext

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  // Ensure cartItems[id] is defined, default to 0 if not
  const itemCount = cartItems[id] || 0;

  return (
    <div className="cartItem">
      {/* <img src={productImage} alt="nothing" /> */}
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} disabled={itemCount === 0}> - </button>
          <input
            type="number"
            value={itemCount}
            min="0"
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0) {
                updateCartItemCount(value, id);
              }
            }}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};