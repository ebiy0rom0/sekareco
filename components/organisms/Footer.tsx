import React from "react";
import { Link } from "aleph/react";
import { Icon, ICON_GITHUB } from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Footer = React.memo(() => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <div className="text-sm md:flex grid justify-between items-end">
        <div className="md:flex grid gap-y-2">
          <p>Copyright © 2022 ebiy0rom0. All Rights Reserved.</p>
          <Link
            to="/policy"
            className={`md:ml-4 md:pl-4 md:border-l-2 ${
              darkMode ? "border-slate-200/40" : "border-slate-400/30"
            }`}
          >
            Privacy Policy
          </Link>
        </div>
        <a href="https://github.com/ebiy0rom0/sekareco" className="hover:opacity-70 flex items-end mt-6 md:mt-0">
          <Icon icon={ICON_GITHUB} title="github" />
          <p className="ml-2">check to code →</p>
        </a>
      </div>
    )}
  </ThemeConsumer>
));
