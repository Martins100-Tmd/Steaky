import { ReactNode } from "react";
//=========== CardNodeType ============
export type card_item = {
  rate: number;
  price: number;
  image: string;
  name: string;
  category: string;
  quantity: number;
  id: string;
};
export type specialDishes_item = {
  name: string;
  description: string;
  image: string;
};
// ====================================

// ============= Cart-Context-Types ===============
export type CartObjectType = {
  CartArray: card_item[];
  CartSideBar: number;
  CartItemID: string;
  CartDuplicate: any;
};
export type CartContextType = {
  Cart: CartObjectType;
  setCart: Function;
  ComputedFees: () => {
    subtotal: number;
    deliveryFee: number;
    total: number;
  };
};
//=================================================

// =========== Card Object Nodes ============
export type CategoryReactNodePairObject = {
  Category: string;
  Element: ReactNode;
};
//===========================================

// ========= Product Context ==========
export type ProductContextType = {
  state: card_item[];
  ComputedCategory: (mole: string) => void;
};

// ====== ItemDB =======
export type ItemDB = {
  Chicken: card_item[];
  All: card_item[];
  Pizza: card_item[];
  Salad: card_item[];
  Hamburger: card_item[];
};
