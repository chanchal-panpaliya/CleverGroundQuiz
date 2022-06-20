import { createContext, useContext, useState,useEffect } from "react";

export type childrenType = React.ReactNode;

type ThemeContextProviderProps = {
  children:childrenType;
};

type ThemeContextType = {
  darkTheme: boolean | null;
  setDarkTheme :(value: boolean) => any;
};

export const ThemeContext = createContext({} as ThemeContextType);

const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const ok:any = JSON.parse(localStorage.getItem("darkTheme")|| '{}'); 
    setDarkTheme(ok);
  }, [darkTheme]);

 
  return  <ThemeContext.Provider value={{darkTheme,setDarkTheme}}> {children} </ThemeContext.Provider>;
  
};
const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };