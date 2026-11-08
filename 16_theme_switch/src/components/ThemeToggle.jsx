import React, { useContext } from "react";
import { SunMoon } from "lucide-react";
import ThemeContext from "../ThemeContext/context";

const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className="active:scale-120">
      <button type="button" onClick={changeTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
        <SunMoon />
      </button>
    </div>
  );
};

export default ThemeToggle;
