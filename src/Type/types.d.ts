import { ReactNode } from "react";
//======================== CardNodeType ============================
export type card_item = {
  rate: string;
  description: string;
  price: number;
  image: string;
  name: string;
  Switch: number;
  id: string;
};
export type specialDishes_item = {
  name: string;
  description: string;
  image: string;
};
// ==================================================================

// =========================== Cart-Context-Types=============================
type CartItemsObjProps = {
  props: {
    id: string;
    price: string;
  };
};
export type CartItemsObj = {
  index: string;
  Element: ReactNode<CartItemsObjProps>;
  ignore: boolean;
};
export type CartObjectType = {
  CartArray: CartItemsObj[];
  CartSideBar: number;
  CartMultipleItems: CartItemsObj[];
  CartTotal: number;
  CartSubTotal: number;
  CartItemID: string;
  CartTrigger: number;
  CartDuplicate: any;
};
export type CartContextType = {
  Cart: CartObjectType;
  setCart: Function;
};
//=============================================================================

// ================ Card Object Nodes =====================
export type CategoryReactNodePairObject = {
  Category: string;
  Element: ReactNode;
};
//=========================================================

// ================= Misc context ==========================
export type MiscObject = {
  currentCategory: string;
  favouriteCard: (mole: string) => ReactNode[];
};
export type MiscType = {
  misc: MiscObject;
  setmisc: Function;
};
