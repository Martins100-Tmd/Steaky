import { createContext, useState, ReactNode } from "react";
import { CartContextType, CartObjectType, CartItemsObj } from "../Type/types";

const CartContext = createContext<CartContextType>(undefined as any);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  let [Cart, setCart] = useState<CartObjectType>({
    CartArray: [],
    CartSideBar: 0,
    CardDeleteSwitch: 0,
  });
  const AssignID = () => {
    return `${Math.floor(Math.random() * 3333334)}`;
  };
  const PriceAccumulator = (mole: string | null, flag: number | null) => {
    let AllPrices: any, All, Total, DeliveryFee;
    /**
     * mole(string): To add a new price if a foodCard quantity increases
     * flag(number): flag to detect add or remove price
     */
    return AllPrices;
  };
  return (
    <CartContext.Provider value={{ Cart, setCart, AssignID, PriceAccumulator }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
