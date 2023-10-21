import { createContext } from "react";

interface globalContextType {
    token: string | undefined;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  }
 export const globalContext = createContext<globalContextType | undefined>(
    undefined
  );