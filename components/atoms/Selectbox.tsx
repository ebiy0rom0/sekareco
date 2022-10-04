import React from "react";

export const Selectbox = React.memo((props: Props) => (
  <label>
    <strong className={`min-w-${props.width}`}>{props.children}</strong>
    <select
      name={props.group}
      className="rounded-md border-transparent bg-transparent py-1 pr-8"
      value={props.value}
      onChange={(e) => props.setter(e.target.value)}
    >
      {Object.entries(props.options).map(([k, v]) => (
        <option
          key={k.toString()}
          value={v}
        >
          {k}
        </option>
      ))}
    </select>
  </label>
));

type Props = JSX.IntrinsicElements["input"] & {
  children: string | number;
  group: string;
  options: { [s: string]: string | number };
  setter: (input: string) => void;
  width: number;
};
