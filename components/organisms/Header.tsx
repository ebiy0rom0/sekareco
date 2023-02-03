import { FC, memo } from "react";
import { useRouter } from "aleph/react";
import { Button } from "~/components/atoms/Button.tsx";
import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { apiFactory } from "~/api/apiFactory.ts";

export const Header: FC = memo(() => {
  const logout = () => {
    apiFactory.get("person").logout()

    const { redirect } = useRouter()
    redirect("/")
  }

  return (
    <ThemeConsumer>
      {({ darkMode, switchMode }) => (
        <div className="header flex items-center">
          <span className="header__title m-0 text-lg font-bold">プロセカの記録帳</span>
          <div className="flex items-center ml-auto">
            <div className="hidden items-center gap-x-5 2xl:flex">
              <Toggle
                mode={!darkMode}
                style={ToggleStyle.THEME}
                role={switchMode}
              />
              <Button
                className="bg-rose-600 text-slate-100 text-sm py-1 px-2"
                onClick={logout}
              >
                sign out
              </Button>
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
});