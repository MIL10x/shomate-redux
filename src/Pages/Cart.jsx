import Card from "../components/CartCard";
import { useSelector } from "react-redux";
import React from "react";
const Cart = () => {
  const item = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  return (
    <>
      <div className="w-full text-center">
        <p className="text-2xl font-medium">
          cart item:{item.length} / total: {total}{" "}
        </p>
      </div>
      <div id="20" className="flex justify-start gap-5  flex-wrap">
        {item.map((i) => (
          <Card item={i} total={total} />
        ))}
      </div>
    </>
  );
};

export default Cart;
