import React from "react"
import { Button } from "./Button.tsx"
import { GithubIcon } from "./GithubIcon.tsx"
import { ThemeCtx } from "../hooks/useTheme.tsx"
import { Toggle, ToggleStyle } from "./Toggle.tsx"

export const Header = React.memo(() => (
  <ThemeCtx.Consumer>
    { ({ darkMode, switchMode }) => (
      <div className="header flex items-center">
        <h3 className="header__title m-0">プロセカの記録帳</h3>
        <div className="flex items-end gap-x-10 ml-auto">
          <Toggle mode={ !darkMode } style={ ToggleStyle.THEME } role={ switchMode } />
          <GithubIcon />
          <Button>sign out</Button>
        </div>
      </div>
    )}
  </ThemeCtx.Consumer>
))