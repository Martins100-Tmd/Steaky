import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { CartContextType, CartObjectType, CartItemsObj } from "../Type/types";

const CartContext = createContext<CartContextType>(undefined as any);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  let [Cart, setCart] = useState<CartObjectType>({
    CartArray: [],
    CartSideBar: 0,
    CardDeleteSwitch: 0,
    CartMultipleItems: [],
    CartSubTotal: 0,
    CartTotal: 0,
    CartItemID: `${Math.floor(Math.random() * 3333334)}`,
    CartTrigger: 0,
    CartDuplicate: {},
  });
  useEffect(() => {
    let DeliveryFee, Total: number;
    let total = 0;
    Cart.CartArray.forEach((item) => {
      if (item.Element.props.price) {
        total += item.Element.props.price;
      }
    });
    DeliveryFee = Math.round(total * 0.24);
    Total = total + DeliveryFee;
    setCart((prev: CartObjectType) => ({
      ...prev,
      CartTotal: Total,
      CartSubTotal: total,
      CartTrigger: 0,
    }));
  }, [Cart.CartTrigger]);
  return (
    <CartContext.Provider value={{ Cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
