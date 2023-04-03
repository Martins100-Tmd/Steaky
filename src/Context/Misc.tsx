import { createContext, useState, ReactNode } from "react";
import { MiscObject, MiscType } from "../Type/types";
import { CardObject } from "../Components/Index";
const MiscContext = createContext<MiscType>(undefined as any);

export const MiscContextProvider = ({ children }: { children: ReactNode }) => {
  let [misc, setmisc] = useState<MiscObject>({
    currentCategory: "All",
    favouriteCard: (mole: string = "All") => {
      let CardItems: ReactNode[];
      CardItems = CardObject.map((item) => {
        if (item.name === mole) {
          return item.Element;
        }
      }).filter((x) => x !== undefined);
      return CardItems;
    },
  });
  return (
    <MiscContext.Provider value={{ misc, setmisc }}>
      {children}
    </MiscContext.Provider>
  );
};
export default MiscContext;
