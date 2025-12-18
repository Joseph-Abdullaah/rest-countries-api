import React from "react";
import { Moon, Sun } from "lucide-react";
import Button from "../components/ui/Button";

function Header() {

  const handleThemeSwitch = () => {
    console.log("Theme switched!");
  };

  return (
    <header className="bg-white dark:bg-dark-blue shadow-md">
      <div className="max-w-360 w-full md:px-18.5 px-8 py-6 flex justify-between items-center">
        <h1 className="font-extrabold text-base md:text-xl">
          Where in the world?
        </h1>
        <Button onClick={handleThemeSwitch} className="font-semibold">
          <Moon />
          <span>Dark Mode</span>
        </Button>
      </div>
    </header>
  );
}

export default Header;
