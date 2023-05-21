import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartData = [
    {
      id: "1",
      name: "貓咪罐罐",
      img: "https://picsum.photos/300/300?text=1",
      price: 100,
      quantity: 2,
    },
    {
      id: "2",
      name: "貓咪乾乾",
      img: "https://picsum.photos/300/300?text=2",
      price: 200,
      quantity: 1,
    },
  ];

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};
