import React from "react";

export const Checkbox = <T extends string | number,>(props: Props<T>) => (
  <div className="flex items-center">
    <input
      id={props.id}
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-red-300"
      value={props.value}
      checked={props.checked}
      onChange={(e) => props.handler(e.target.value)}
    />
    <label htmlFor={props.id} className="ml-3 text-sm">{props.children}</label>
  </div>
);

type Props<T> = {
  id: string;
  children: string | number;
  value: T;
  checked: boolean;
  handler: (d: string) => void;
};
