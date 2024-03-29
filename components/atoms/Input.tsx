import React from "react";
import { useTheme } from "~/hooks/useTheme.tsx";

export const Input = (props: Props) => {
  const { dark } = useTheme();

  return (
    <label htmlFor={props.id} className={props?.className}>
      {/* <strong className="ms-1">{props.labelName}</strong> */}
      <input
        id={props.id}
        className={`
          block box-border
          text-base tracking-widest
          ${dark ? "text-slate-300/80" : "text-slate-700/80"}
          w-full
          py-1 px-3
          rounded-lg shadow-sm border-none
          ${dark ? "bg-slate-700" : "bg-slate-300/70"}
          placeholder-gray-900/40
          focus:outline-none
          ${dark ? "focus:bg-slate-600/90" : "focus:bg-slate-200/90"}
          focus:caret-sky-500
          focus:ring-2 focus:ring-sky-700
          peer
        `}
        type={props.type}
        value={props?.value}
        onChange={props.onChange}
        placeholder={props?.placeholder}
      />
      <p className="mt-2 invisible peer-required:visible text-red-500">
        {props?.invalidText}
      </p>
    </label>
  );
}

type Props = {
  id: string;
  labelName: string;
  type: "text" | "password";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  placeholder?: string;
  invalidText?: string;
};
