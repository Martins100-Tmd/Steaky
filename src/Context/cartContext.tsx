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
    AllPrices = Cart.CartArray.map((item: any) => {
      return item.Element.props.price;
    });
    if (mole && flag === 1) {
      AllPrices = [...AllPrices, mole];
    } else if (mole && flag === 0) {
      AllPrices = AllPrices.map((item: any, index: number) => {
        if (index !== AllPrices.indexOf(mole)) return item;
      });
    } else if (mole === null && flag === null) {
      AllPrices = [...AllPrices];
    }
    All = AllPrices.map((item: any) => {
      return item.split("").filter((x: any) => {
        return x !== "$" && x !== "0" && x !== ".";
      });
    }).map((item: any) => {
      return parseInt(item.join(""));
    });
    Total = All.reduce((prev: number, curr: number) => {
      return prev + curr;
    }, 0);
    DeliveryFee = Math.round(Total * 0.32);
    return [`$${Total}`, `$${DeliveryFee}`, `$${Total + DeliveryFee}`];
  };
  return (
    <CartContext.Provider value={{ Cart, setCart, AssignID, PriceAccumulator }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
