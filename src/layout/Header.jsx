import React from "react";
import { Moon, Sun } from "lucide-react";
import Button from "../Components/ui/Button";
import useThemeStore from "../store/themeStore";

function Header() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="bg-white dark:bg-blue-900 shadow-md transition-colors duration-300">
      <div className="mx-auto max-w-screen-2xl w-full px-4 md:px-16 py-5 flex justify-between items-center">
        <h1 className="font-extrabold text-sm md:text-xl text-grey-950 dark:text-white transition-colors duration-300">
          Where in the world?
        </h1>
        <Button
          onClick={toggleTheme}
          className="font-semibold text-grey-950 dark:text-white transition-colors duration-300 text-sm"
        >
          {theme === "dark" ? (
            <>
              <Sun size={16} />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={16} className="fill-grey-950" />
              <span>Dark Mode</span>
            </>
          )}
        </Button>
      </div>
    </header>
  );
}

export default Header;
