import { createContext } from "react";

export const ThemeContext = createContext('light');
export const CurrentUserContext = createContext({
    name: null,
    email: null
});
