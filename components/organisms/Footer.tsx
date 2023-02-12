import React from "react";
import { Link } from "aleph/react";
import { Icon, ICON_GITHUB } from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { useI18n } from "~/hooks/useI18n.ts";

export const Footer = React.memo(() => {
  const { t } = useI18n();

  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <div className="text-sm md:flex grid justify-between items-end">
          <div className="md:flex grid gap-y-4 md:gap-x-6 md:divide-x-2">
            <p>© 2022-2023 K.</p>
            <Link
              to="/policy"
              className={`md:pl-6 md:border-l-2 font-bold ${
                darkMode ? "border-slate-200/40 text-amber-400" : "border-slate-400/30 text-amber-600"
              }`}
            >
              {t.POLICY}
            </Link>
            <Link
              to="/terms"
              className={`md:pl-6 md:border-l-2 font-bold ${
                darkMode ? "border-slate-200/40 text-amber-400" : "border-slate-400/30 text-amber-600"
              }`}
            >
              {t.TERMS}
            </Link>
          </div>
          <a
            href="https://github.com/ebiy0rom0/sekareco"
            className="hover:opacity-70 flex items-end mt-6 md:mt-0"
          >
            <Icon icon={ICON_GITHUB} title="github" />
          </a>
        </div>
      )}
    </ThemeConsumer>
  );
});
