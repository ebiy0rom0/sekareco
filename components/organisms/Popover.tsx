import { FC, ReactNode, Fragment } from "react";
import { Popover as Pop, Transition } from "@headlessui/react";
import { Icon, Icons } from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Popover: FC<Props> = ({ label, icon, children }) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <Pop className="relative lg:hidden">
        <Pop.Button className="flex gap-1 outline-0 font-bold">
          <Icon icon={icon} />{ label }
        </Pop.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-85"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-85"
        >
          <Pop.Panel
            className={`absolute rounded-lg border-2 w-60 mt-1 px-3 right-0 shadow-2xl divide-y ${
              darkMode
                ? "bg-slate-800 shadow-slate-400/30 border-gray-700 divide-gray-700"
                : "bg-slate-100"
            }`}
          >
            { children }
          </Pop.Panel>
        </Transition>
      </Pop>
    )}
  </ThemeConsumer>
);

type Props = {
  label?: string;
  icon: Icons;
  children: ReactNode;
};
