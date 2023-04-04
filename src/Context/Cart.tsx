import { useState, createContext, ReactNode } from "react";
import { Cart } from "../Type/types";
const CartContext = createContext<Cart>(undefined as any);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  let [cart, setcart] = useState({ sdCart: 1, cartLen: 0 });
  return (
    <CartContext.Provider value={{ cart, setcart }}>
      {children}
    </CartContext.Provider>
  );
};
