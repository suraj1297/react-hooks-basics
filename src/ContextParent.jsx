import React, { useState, createContext } from 'react'
import ContextChild from './ContextChild'

export const ThemeContext = createContext()
export const ThemeNameContext = createContext()

export default function ContextParent() {

    const ThemeStyle = {
        light: {
            background: "white",
            color: "black"
        },
        dark: {
            background: "black",
            color: "white"
        }
    }

    const [theme, settheme] = useState("light")

    const changeTheme = () => {
        settheme(prevState => {
            return prevState === "light" ? "dark" : "light"
        })
    }

    return (
        < ThemeContext.Provider value={ThemeStyle[theme]} >
            <ThemeNameContext.Provider value={theme}>
                <ContextChild />
            </ThemeNameContext.Provider>
            <button onClick={changeTheme}>Change Theme</button>
        </ThemeContext.Provider >
    )
}
