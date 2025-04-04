import { createContext, useState, useEffect } from "react";
import { THEME } from "../const/var";
import { toast } from "react-toastify";

export const SettingContext = createContext();

export function SettingProvider({ children }) {
  const [theme, setTheme] = useState(THEME.light);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || THEME.light;
    setTheme(storedTheme);
    document.body.classList.add(storedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.remove(THEME.light, THEME.dark);
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme =
      theme === THEME.light ? THEME.dark : THEME.light;
    setTheme(newTheme);
    toast.info(`Apply ${newTheme} theme!`);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <SettingContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SettingContext.Provider>
  );
}
