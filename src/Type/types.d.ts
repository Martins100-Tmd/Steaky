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
