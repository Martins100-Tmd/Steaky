import { useState, createContext, ReactNode } from "react";
import { CardDB } from "../Index";
import { card_item, ProductContextType } from "../Components/Type/types";
const ProductCategory = createContext<ProductContextType>(undefined as any);

export const ProductCategoryContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  let [state, setstate] = useState<Array<card_item>>(CardDB.All);
  const ComputedCategory = (mole: string) => {
    switch (mole) {
      case "All":
        setstate(CardDB.Hamburger);
        return;
      case "Hamburgers":
        setstate(CardDB.Hamburger);
        return;
      case "Chickens":
        setstate(CardDB.Chicken);
        return;
      case "Pizzas":
        setstate(CardDB.Pizza);
        return;
      case "Salads":
        setstate(CardDB.Salad);
        return;
      default:
        setstate(CardDB.Hamburger);
        return;
    }
  };
  return (
    <ProductCategory.Provider value={{ state, ComputedCategory }}>
      {children}
    </ProductCategory.Provider>
  );
};

export default ProductCategory;
