import React from "react"
import { Link } from "aleph/react"

export const Navigation = React.memo(() => (
  <>
    <h2 className="nav__title font-bold">機能 一覧</h2>
    <ul className="list-none grid gap-y-6 text-xl pl-10">
      { [
          ["プロフィール", "/profile"],
          ["記録帳", "/records"],
          ["vs. フレンド", "/versus"],
        ].map(([title, url]) => (
          <li>
            <Link className="
              text-slate-400 
              hover:text-slate-500 
              font-semibold 
              decoration-none
            "
            to={ url }
          >
              { title }
            </Link>
          </li>
        ))
      }
    </ul>
  </>
))
