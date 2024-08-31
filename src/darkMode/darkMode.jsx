
import {createContext,useState} from "react";

export const ThemeContext = createContext(null);

export default function DarkMode({children}) {
    const [theme,setTheme] = useState("light");

    function toggle() {
        setTheme((prev) => prev === "light" ? "dark" : "light"); //setThem(theme +1)
    }

     return <ThemeContext.Provider value={{theme,toggle}}>
         {children}
          </ThemeContext.Provider>
}