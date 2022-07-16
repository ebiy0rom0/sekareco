import React from "react"
import { ThemeCtx } from "../hooks/useTheme.tsx"

export const Input = (props: Props) => (
  <ThemeCtx.Consumer>
    { ({ darkMode }) => (
      <label htmlFor={ props.id } className={ props?.className }>
        <strong>{ props.labelName }</strong>
        <input
          id={ props.id }
          className={ [
            "block box-border",
            "text-lg",
            "text-slate-300/80",
            "w-full",
            "mt-2 py-1 px-3",
            "rounded-lg shadow-sm border-none",
            darkMode ? "bg-slate-800" : "bg-slate-300",
            "placeholder-gray-900/40",
            darkMode ? "ring-1 ring-slate-500" : "ring-1 ring-slate-400",
            "focus:outline-none",
            darkMode ? "focus:bg-slate-800/90" : "focus:bg-slate-200",
            "focus:caret-sky-500",
            "focus:ring-3 focus:ring-sky-500",
            "peer"
          ].join(" ") }
          type={ props.type }
          value={ props?.value }
          onChange={ props.onChange }
          placeholder={ props?.placeholder }
        />
        <p className="mt-2 invisible peer-required:visible text-red-500">
          { props?.invalidText }
        </p>
      </label>
    )}
  </ThemeCtx.Consumer>
)

type Props = {
  id: string
  labelName: string
  type: "text" | "password"
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  value?: string
  placeholder?: string
  invalidText?: string
}