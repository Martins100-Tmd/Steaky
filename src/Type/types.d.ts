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
export type CartItemsObj = {
  index: number;
  Element: ReactNode;
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
