import { createContext, useState, ReactNode } from "react";
import { CartContextType, CartObjectType } from "../Type/types";

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
  const PriceAccumulator = () => {
    let All = Cart.CartArray.map((item: any) => {
      return item.Element.props.price.split("").filter((x: any) => {
        return x !== "$" && x !== "0" && x !== ".";
      });
    });
    return All.map((item) => {
      return parseInt(item.join(""));
    });
  };
  console.log(PriceAccumulator());
  return (
    <CartContext.Provider value={{ Cart, setCart, AssignID }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
