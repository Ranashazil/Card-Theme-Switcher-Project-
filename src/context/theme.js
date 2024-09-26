import { useContext, createContext } from "react";

export const theme = createContext({
    themeMode: "light",
    lighttheme: ()=>{},
    darktheme: ()=>{}
})

export const ThemeProvider = theme.Provider

export default function useTheme(){
    return useContext(theme)
}