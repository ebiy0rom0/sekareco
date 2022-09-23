import React from "react"
import { Button } from "~/components/atoms/Button.tsx"
import { GithubIcon } from "~/components/atoms/GithubIcon.tsx"
import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx"
import { ThemeCtx } from "~/hooks/useTheme.tsx"

export const Header = React.memo(() => (
  <ThemeCtx.Consumer>
    { ({ darkMode, switchMode }) => (
      <div className="header flex items-center">
        <h3 className="header__title m-0">プロセカの記録帳</h3>
        <div className="flex items-center gap-x-10 ml-auto">
          <Toggle mode={ !darkMode } style={ ToggleStyle.THEME } role={ switchMode } />
          <div className="pt-2">
            <GithubIcon />
          </div>
          <Button>sign out</Button>
        </div>
      </div>
    )}
  </ThemeCtx.Consumer>
))