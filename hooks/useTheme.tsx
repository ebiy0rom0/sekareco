import { createContext, useContext } from "react";
import { useSessionStorage } from "~/utils/useSessionStorage.ts";

const ThemeCtx = createContext<Theme | null>(null);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [dark, setDark] = useSessionStorage("theme", false);
  const context: Theme = {
    dark,
    switchTheme: () => setDark(!dark),
  };

  return (
    <ThemeCtx.Provider value={context}>
      {children}
    </ThemeCtx.Provider>
  );
};

const useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) {
    throw new Error("useTheme has to be used within <AuthContext.Provider>")
  }
  return ctx
};

export { useTheme, ThemeProvider }

type Props = {
  children: React.ReactNode;
};

type Theme = {
  dark: boolean;
  switchTheme: () => void;
};
