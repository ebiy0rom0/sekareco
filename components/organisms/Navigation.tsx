import React from "react";
import { Link, useRouter } from "aleph/react";
import { useI18n } from "~/hooks/useI18n.ts";
import { useTheme } from "~/hooks/useTheme.tsx";

export const Navigation = React.memo(() => {
  const router = useRouter();
  const { t } = useI18n();
  const { dark } = useTheme();

  const menu = [
    { title: t.PROFILE, url: "/profile" },
    { title: t.SCORE_BOOK, url: "/scorebook" },
    { title: t.VERSUS, url: "/versus" },
    { title: t.SCRIM, url: "/scrim" },
  ];

  return (
    <>
      <span className="nav__title text-xl font-bold">{t.FEATURES}</span>
      <ul
        className={`list-none grid gap-y-2 text-base ml-2 mt-4 py-3 border-l-2 ${
          dark ? "border-slate-700" : "border-slate-200"
        }`}
      >
        {menu.map(({ title, url }) => (
          <li
            className={`indent-5 -ml-2px py-2 border-l-2 ${
              router.url.pathname === url
                ? dark
                  ? "text-pink-500/90 border-pink-500/90"
                  : "text-sky-500 border-sky-500"
                : dark
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
  );
});
