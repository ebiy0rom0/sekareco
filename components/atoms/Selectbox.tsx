import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon, ICON_SELECTOR, ICON_CHECK } from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Selectbox = React.memo((props: Props) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <Listbox value={props.selected} onChange={props.setSelected}>
        <div className="relative">
          <Listbox.Button
            className={`
              relative
              w-full py-2 pl-3 pr-10
              cursor-default
              rounded-lg
              ${darkMode ? "bg-slate-700 shadow-slate-400/20" : "bg-slate-200"}
              text-left
              shadow-md
              focus:outline-none
              focus-visible:border-indigo-500
              focus-visible:ring-2
              ${darkMode ? "focus-visible:ring-black" : "focus-visible:ring-white"}
              focus-visible:ring-opacity-75
              focus-visible:ring-offset-2
              ${darkMode ? "focus-visible:ring-offset-violet-300" : "focus-visible:ring-offset-violet-600"}
              sm:text-sm
            `}
          >
            <span className="block truncate">
              {Object.entries(props.options).find(([_, value]) => value == props.selected)?.[0]}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon icon={ICON_SELECTOR}></Icon>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-90"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`
              absolute
              overflow-auto
              w-full max-h-60 mt-2 py-1
              rounded-md
              ${darkMode ? "bg-slate-700 shadow-slate-400/20" : "bg-slate-200"}
              text-base
              shadow-lg
              ring-1 ${darkMode ? "ring-gray-600" : ""} ring-opacity-5
              focus:outline-none
              sm:text-sm
              z-10
            `}>
              {Object.entries(props.options).map(([key, value], personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-violet-600 text-slate-100" : ""
                    }`}
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                      >
                        {key}
                      </span>
                      {selected
                        ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <Icon size={20} icon={ICON_CHECK}></Icon>
                          </span>
                        )
                        : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    )}
  </ThemeConsumer>
));

type Props = {
  group: string;
  options: { [s: string]: string | number };
  selected: string | number;
  setSelected: (input: string) => void;
};
