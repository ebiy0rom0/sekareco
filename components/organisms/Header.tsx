import React from "react";
import { Button } from "~/components/atoms/Button.tsx";
import { GithubIcon } from "~/components/atoms/GithubIcon.tsx";
import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx";
import { ThemeCtx } from "~/hooks/useTheme.tsx";

export const Header = React.memo(() => (
  <ThemeCtx.Consumer>
    {({ darkMode, switchMode }) => (
      <div className="header flex items-center">
        <span className="header__title m-0 text-lg font-bold">プロセカの記録帳</span>
        <div className="flex items-center gap-x-5 ml-auto">
          <GithubIcon />
          <Toggle
            mode={!darkMode}
            style={ToggleStyle.THEME}
            role={switchMode}
          />
          <Button
            className="bg-rose-600 text-slate-100 text-sm py-1 px-2"
            onClick={() => alert("wip")}
          >
            sign out
          </Button>
        </div>
      </div>
    )}
  </ThemeCtx.Consumer>
));
