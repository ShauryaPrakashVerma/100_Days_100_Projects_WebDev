import React from "react";
import ThemeContext from "./context";

const ThemeProvider = ({ theme, setTheme, children }) => {
  const changeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
