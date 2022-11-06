import React from "react";
import { Link, useRouter } from "aleph/react";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const menu = [
  { title: "プロフィール", url: "/profile" },
  { title: "記録帳", url: "/records" },
  { title: "vs.フレンド", url: "/versus" },
  { title: "スクリム", url: "/scrim" },
];

export const Navigation = React.memo(() => {
  const router = useRouter();

  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <>
          <span className="nav__title text-xl font-bold">機能 一覧</span>
          <ul
            className={`list-none grid gap-y-2 text-base ml-2 mt-4 py-3 border-l-2 ${
              darkMode ? "border-slate-700" : "border-slate-200"
            }`}
          >
            {menu.map(({ title, url }) => (
              <li
                className={`indent-5 -ml-2px py-2 border-l-2 ${
                  router.url.pathname === url
                    ? darkMode
                      ? "text-pink-500/90 border-pink-500/90"
                      : "text-sky-500 border-sky-500"
                    : darkMode
                    ? "border-slate-700 hover:border-slate-300/80 hover:text-slate-300/90"
                    : "border-slate-200 hover:border-slate-500 hover:opacity-70"
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
    </ThemeConsumer>
  );
});
