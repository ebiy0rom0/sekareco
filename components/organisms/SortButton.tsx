import { Fragment } from "react";
import { Popover, RadioGroup, Transition } from "@headlessui/react";
import { Icon, ICON_CHECK, ICON_SORT } from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

const orders = [
  { name: "昇順" },
  { name: "降順" },
];

const targets = [
  { name: "標準" },
  { name: "レベル" },
  { name: "ユニット" },
];

const items = [
  { label: "項目", contents: targets },
  { label: "昇順/降順", contents: orders },
];

export const SortButton = () => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <Popover className="relative">
        <Popover.Button className="flex gap-1 outline-0">
          sort <Icon icon={ICON_SORT} />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-85"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-85"
        >
          <Popover.Panel
            className={`absolute rounded-lg border w-40 mt-2 px-3 left-0 shadow-2xl divide-y ${
              darkMode
                ? "bg-slate-800 shadow-slate-400/30 border-gray-700 divide-gray-700"
                : "bg-slate-100"
            }`}
          >
            {items.map(({ label, contents }) => (
              <RadioGroup key={label} className="grid gap-1 py-4">
                <RadioGroup.Label className="font-bold">{label}</RadioGroup.Label>
                {contents.map((content) => (
                  <RadioGroup.Option
                    key={content.name}
                    value={content}
                    className={({ checked }) =>
                      `flex rounded justify-between px-2 py-1 ${
                        checked ? "bg-violet-600 text-slate-200" : "hover:bg-violet-300 "
                      }`}
                  >
                    {({ checked }) => (
                      <>
                        <span className="">{content.name}</span>
                        {checked && <Icon icon={ICON_CHECK} />}
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            ))}
          </Popover.Panel>
        </Transition>
      </Popover>
    )}
  </ThemeConsumer>
);

type Props = {
  onChangeOrder: () => void;
  onChangeColumn: () => void;
};
