import React from "react"
import { GithubIcon } from "./GithubIcon.tsx"

export const Header = React.memo(() => (
  <div className="header flex items-center">
    <h3 className="header__title m-0">プロセカの記録帳</h3>
    <div className="ml-auto">
      <GithubIcon />
    </div>
  </div>
))