import React from "react";
import { Link } from "aleph/react";

export const Navigation = React.memo(() => (
  <>
    <span className="nav__title text-xl font-bold">機能 一覧</span>
    <ul className="list-none grid gap-y-5 text-base pl-10 mt-5">
      {[
        ["プロフィール", "/profile"],
        ["記録帳", "/records"],
        ["vs. フレンド", "/versus"],
      ].map(([title, url]) => (
        <li key={url}>
          <Link
            className="
              hover:opacity-70
              font-semibold
              decoration-none
            "
            to={url}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </>
));
