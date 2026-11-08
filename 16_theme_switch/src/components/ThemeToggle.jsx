import React from "react";
import { SunMoon } from "lucide-react";

const ThemeToggle = () => {
  return (
    <div className="active:scale-120">
      <button onClick="">
        <SunMoon />
      </button>
    </div>
  );
};

export default ThemeToggle;
