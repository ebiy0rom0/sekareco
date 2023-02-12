import { FC, ReactNode } from "react";
import { Disclosure as D } from "@headlessui/react";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Icon, ICON_MINUS, ICON_PLUS } from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Disclosure: FC<Props> = ({ title, children }) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <>
        <div className={`py-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
          <D>
            {({ open }) => (
              <>
                <D.Button className="w-full pr-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold tracking-widest">{title}</span>
                    <Icon icon={open ? ICON_MINUS : ICON_PLUS} />
                  </div>
                </D.Button>
                <D.Panel className="space-y-4 pt-6">
                  {children}
                </D.Panel>
              </>
            )}
          </D>
        </div>
      </>
    )}
  </ThemeConsumer>
);

export type Props = {
  title: string;
  children: ReactNode;
};
