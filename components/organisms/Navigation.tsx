import React from "react";
import { Link, useRouter } from "aleph/react";
import { ThemeCtx } from "~/hooks/useTheme.tsx";

export const Navigation = React.memo(() => {
  const router = useRouter();

  return (
    <ThemeCtx.Consumer>
      {({ darkMode }) => (
        <>
          <span className="nav__title text-xl font-bold">機能 一覧</span>
          <ul className={`list-none grid gap-y-2 text-base ml-2 mt-4 py-3 border-l ${darkMode ? "border-slate-700" : ""}`}>
            {[
              ["プロフィール", "/profile"],
              ["記録帳", "/records"],
              ["vs. フレンド", "/versus"],
            ].map(([title, url]) => (
              <li
                className={`indent-5 -ml-px py-1 border-l ${
                  router.url.pathname === url
                    ? darkMode ? "text-sky-400 border-sky-400" : "text-sky-500 border-sky-500"
                    : darkMode
                    ? "hover:border-slate-700 hover:opacity-70"
                    : ""
                }`}
                key={url}
              >
                <Link
                  className="
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
      )}
    </ThemeCtx.Consumer>
  );
});
