import { createContext, useState, ReactNode } from "react";
import { TransformType } from "../Type/types";

const Transform = createContext<TransformType>(undefined as any);

export const TransformProvider = ({ children }: { children: ReactNode }) => {
  let [transform, settransform] = useState<ReactNode[]>([]);
  return (
    <Transform.Provider value={{ transform, settransform }}>
      {children}
    </Transform.Provider>
  );
};
export default Transform;
