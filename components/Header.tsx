import React from "react"

export const Header = React.memo(() => (
  <div className="header flex items-center">
    <h3 className="header__title m-0">プロセカの記録帳</h3>
    <div className="ml-auto">
      <a href="https://github.com/ebiy0rom0/sekareco">
        <span className="sr-only">Link to GitHub</span>
        <img src="/assets/github.svg" height="24" title="GitHub" className="invert hover:opacity-80" />
      </a>
    </div>
  </div>
))