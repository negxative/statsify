import { createContext } from "react";

interface globalContextType {
    token: string | undefined;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
    duration:string;
    setDuration:React.Dispatch<React.SetStateAction<string>>;
  }
 export const globalContext = createContext<globalContextType | undefined>(
    undefined
  );