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
//========= Cart I ===========
export type Cart = {
  cart: number;
  setcart: Function;
};
// ============ Cart II ===========
export type TransformType = {
  transform: ReactNode[];
  settransform: Function;
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
