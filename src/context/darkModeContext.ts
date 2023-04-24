import { createContext, SetStateAction } from "react";

interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  setDarkMode: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
});
