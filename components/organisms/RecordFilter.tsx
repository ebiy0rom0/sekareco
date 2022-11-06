import { DIFFICULTY } from "~/types/index.ts";
import { Disclosure } from "@headlessui/react";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Icon, ICON_MINUS, ICON_PLUS } from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const RecordFilter = (props: Props) => {
  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <>
          <div className={`py-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full pr-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold tracking-widest">難易度</span>
                      <Icon icon={open ? ICON_MINUS : ICON_PLUS} />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-4 pt-6">
                    {Object.entries(DIFFICULTY).map(([k, v]) => (
                      <Checkbox
                        key={k.toString()}
                        id={`filter-difficulty-${k}`}
                        handler={props.handler}
                        value={v}
                        checked={props.isChecked(v)}
                      >
                        {k}
                      </Checkbox>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </>
      )}
    </ThemeConsumer>
  );
};

export type Props = {
  handler: (n: string) => void;
  isChecked: (n: number) => boolean;
};
