import { createContext, useState, ReactNode } from "react";
import { Mode } from "../Misc/Mode/Mode";
import { colorSchemeMediaType } from "../Components/Type/types";
const ModeContext = createContext(undefined as any);

export const ModeContextProvider = ({ children }: { children: ReactNode }) => {
  let [dark, light] = [
    {
      bgI: "bg-black",
      bgII: "bg-gray-200",
      bgIII: "bg-gray-500",
      textI: "text-white",
      textII: "text-gray-200",
    },
    {
      bgI: "bg-black",
      bgII: "bg-gray-200",
      bgIII: "bg-gray-500",
      textI: "text-white",
      textII: "text-gray-200",
    },
  ];
  let [ModeState, setModeState] = useState(dark);
  return <ModeContext.Provider value={{}}>{children}</ModeContext.Provider>;
};
