import { FC, memo } from "react";
import { redirect } from "aleph/runtime/core/redirect.ts";
import { Button } from "~/components/atoms/Button.tsx";
import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { useI18n } from "~/hooks/useI18n.ts";
import { apiFactory } from "~/api/apiFactory.ts";

export const Header: FC = memo(() => {
  const { t } = useI18n();

  const logout = () => {
    apiFactory.get("person").logout();
    redirect("/");
  };

  return (
    <ThemeConsumer>
      {({ darkMode, switchMode }) => (
        <div className="header flex items-center pt-3 pb-0.5">
          <img className="w-10" src="assets/sitelogo.svg" />
          <span className="ml-3 text-lg font-bold">{t.TITLE}</span>
          <div className="flex items-center ml-auto">
            <div className="hidden items-center gap-x-5 2xl:flex">
              <Toggle
                mode={!darkMode}
                style={ToggleStyle.THEME}
                role={switchMode}
              />
              <Button
                className="bg-rose-600 text-slate-100 text-sm py-2 px-6"
                onClick={logout}
              >
                {t.SIGN_OUT}
              </Button>
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
});
