import React from "react"

export const Header = React.memo(() => (
  <div className="header flex items-center">
    <h3 className="header__title m-0">プロセカ クリア記録</h3>
    <div className="ml-auto">
      <a href="https://github.com/ebiy0rom0/sekareco">
        <img src="/assets/github.svg" height="24" title="GitHub" className="invert" />
      </a>
    </div>
  </div>
))