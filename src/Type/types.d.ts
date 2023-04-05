import { ReactNode } from "react";
export type card_item = {
  rate: string;
  description: string;
  price: string;
  image: string;
  name: string;
  Switch: number;
};

export type specialDishes_item = {
  name: string;
  description: string;
  image: string;
};

// ============ Cart-Context-Types===========
type CartItemsObjProps = {
  props: {
    id: string;
    price: string;
  };
};
export type CartItemsObj = {
  index: string;
  Element: ReactNode<CartItemsObjProps>;
};

export type CartObjectType = {
  CartArray: CartItemsObj[];
  CartSideBar: number;
  CardDeleteSwitch: number;
};
export type CartContextType = {
  Cart: CartObjectType;
  setCart: Function;
  AssignID: () => string;
  PriceAccumulator: (mole: string | null, flag: number | null) => string[];
};

// ================ CardObject =====================
export type CategoryReactNodePairObject = {
  name: string;
  Element: ReactNode;
};
// ================= Misc context ==========================
export type MiscObject = {
  currentCategory: string;
  favouriteCard: (mole: string) => ReactNode[];
};
export type MiscType = {
  misc: MiscObject;
  setmisc: Function;
};
