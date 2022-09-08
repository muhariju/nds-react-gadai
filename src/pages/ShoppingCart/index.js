import React from "react";
import { useSelector } from "react-redux";
import { CardProduct } from "../../components/CardProduct";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cartSlice";

export const ShoppingCart = () => {
  const cart = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="center-align">
      <h1>Shopping Cart</h1>
      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      {cart && cart.length > 0 ? (
        <ul className="collection">
          {cart.map((item) => (
            <CardProduct
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
