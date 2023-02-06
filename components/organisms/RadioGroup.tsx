import { FC, Dispatch, SetStateAction } from "react";
import { RadioGroup as Rg } from "@headlessui/react";
import { Icon, ICON_CHECK } from "~/components/atoms/Icon.tsx";

export const RadioGroup: FC<Props> = ({ label, items, value, onChange }) => (
  <Rg key={label} className="grid gap-1 py-4" value={value} onChange={ onChange }>
    <Rg.Label className="font-bold">{ label }</Rg.Label>
    {items.map((item) => (
      <Rg.Option
        key={item}
        value={item}
        className={({ checked }) =>
          `flex rounded justify-between px-2 py-1 ${
            checked ? "bg-violet-500 text-slate-100" : "hover:bg-violet-300"
          }`}
      >
        {({ checked }) => (
          <>
            <span className="">{ item }</span>
            {checked && <Icon icon={ICON_CHECK} />}
          </>
        )}
      </Rg.Option>
    ))}
  </Rg>
)

type Props = {
  label: string;
  items: string[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>
}