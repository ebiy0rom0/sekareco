import React, { Fragment, useState } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { Button } from "~/components/atoms/Button.tsx";
import { Icon, ICON_MENU } from "~/components/atoms/Icon.tsx";
import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx";
import { Navigation } from "~/components/organisms/Navigation.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { useSessionStorage } from "~/utils/useSessionStorage.ts";

export const Header = React.memo(() => {
  const [open, setOpen] = useSessionStorage<{open: boolean}>("menu", {open: true})

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
                onClick={() => alert("wip")}
              >
                sign out
              </Button>
            </div>
            <Button className="2xl:hidden -mr-3" onClick={()=>setOpen({open: true})}><Icon icon={ICON_MENU} /></Button>
          </div>
          <Transition.Root show={open.open} as={Fragment}>
            <Dialog as="div" className="relative z-40 2xl:hidden" onClose={() => setOpen({open: false})}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className={`fixed inset-0 bg-opacity-40 ${darkMode ? "bg-slate-200" : "bg-slate-700"}`} />
              </Transition.Child>
              <div className="fixed inset-0 z-40 flex">
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
                    className={`relative flex flex-col h-full w-full ml-auto jusitfy-center max-w-xs overflow-y-auto py-12 px-8 divide-y space-y-10
                    ${darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-800"}`}
                  >
                    <div><Navigation /></div>
                    <div className="flex pt-10">
                    <Toggle
                      mode={!darkMode}
                      style={ToggleStyle.THEME}
                      role={switchMode}
                    /></div>
                    <div className="flex w-full py-10">
                    <Button
                      className="bg-rose-600 text-slate-100 text-sm py-1 px-2 w-full"
                      onClick={() => alert("wip")}
                    >
                      sign out
                    </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      )}
    </ThemeConsumer>
  )
});


