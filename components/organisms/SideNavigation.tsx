import { FC, Fragment } from "react";
import { useRouter } from "aleph/react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "~/components/atoms/Button.tsx";
import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx";
import { Navigation } from "~/components/organisms/Navigation.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { useI18n } from "~/hooks/useI18n.ts";
import { useSessionStorage } from "~/utils/useSessionStorage.ts";
import { apiFactory } from "~/api/apiFactory.ts";

export const SideNavigation: FC = () => {
  const { t } = useI18n();
  const [open, setOpen] = useSessionStorage("menu", false)
  const logout = () => {
    const { redirect } = useRouter()
    apiFactory.get("person").logout()
    redirect("/")
  }
  return (
  <ThemeConsumer>
    { ({ darkMode, switchMode }) => (
      <>
        <div className="2xl:hidden fixed z-30 w-8 h-8 right-4 top-1.5">
          <Button className="absolute inset-0" onClick={() => setOpen(!open)}>
            <span className={`absolute transition-transform duration-500 ${open ? "rotate-135" : "-translate-y-2"} border w-full`}></span>
            <span className={`absolute transition-opacity duration-700 ${open ? "opacity-0" : "opacity-100"} border w-full`}></span>
            <span className={`absolute transition-transform duration-500 ${open ? "-rotate-135" : "translate-y-2"} border w-full`}></span>
          </Button>
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative 2xl:hidden" onClose={() => undefined}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className={`fixed inset-0 bg-opacity-40 z-10 ${
                  darkMode ? "bg-slate-200" : "bg-slate-700"
                }`}
                onClick={() => setOpen(false)}
              />
            </Transition.Child>
            <div className="fixed inset-y-0 flex z-20">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel
                  className={`fixed flex flex-col h-full w-full jusitfy-center max-w-xs overflow-y-auto py-12 px-8 divide-y space-y-10 right-0
                  ${darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-800"}`}
                >
                  <div>
                    <Navigation />
                  </div>
                  <div className="flex pt-10">
                    <Toggle
                      mode={!darkMode}
                      style={ToggleStyle.THEME}
                      role={switchMode}
                    />
                  </div>
                  <div className="flex w-full py-10">
                    <Button
                      className="bg-rose-600 text-slate-100 text-sm py-1 px-2 w-full"
                      onClick={logout}
                    >
                      { t.SIGN_OUT }
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        </>
      )}
    </ThemeConsumer>
  );
}
