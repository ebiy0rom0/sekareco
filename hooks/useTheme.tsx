import { createContext, useState } from "react";
import { useSessionStorage } from "~/utils/useSessionStorage.ts";

export const ThemeCtx = createContext<Theme>({
  darkMode: false,
  switchMode: () => undefined,
});
export const ThemeConsumer = ThemeCtx.Consumer;

export const useTheme = () => {
  const [dark, setDark] = useSessionStorage("theme", false);
  const context: Theme = {
    darkMode: dark,
    switchMode: () => setDark(!dark),
  };

  const ThemeProvider: React.FC<Props> = ({ children }) => (
    <ThemeCtx.Provider value={context}>
      {children}
    </ThemeCtx.Provider>
  );

  return ThemeProvider;
};

type Props = {
  children: React.ReactNode;
};

type Theme = {
  darkMode: boolean;
  switchMode: () => void;
};
