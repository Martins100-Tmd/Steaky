import { createContext, useState, ReactNode } from "react";
import {
  CartContextType,
  CartObjectType,
  card_item,
} from "../Components/Type/types";

const CartContext = createContext<CartContextType>(undefined as any);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  let [Cart, setCart] = useState<CartObjectType>({
    CartArray: [],
    CartSideBar: 0,
    CartItemID: `${Math.floor(Math.random() * 3333334)}`,
    CartDuplicate: {},
  });
  const ComputedFees = () => {
    let subtotal = 0,
      mul = 0,
      help = Cart.CartDuplicate;
    Object.keys(help).forEach((item) => {
      mul = help[item].frequency * help[item].price;
      subtotal += mul;
    });
    let deliveryFee = Math.round(subtotal * 0.24);
    let total = subtotal + deliveryFee;
    return {
      subtotal,
      deliveryFee,
      total,
    };
  };
  return (
    <CartContext.Provider value={{ Cart, setCart, ComputedFees }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
