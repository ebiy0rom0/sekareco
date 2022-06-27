import React from "react"
import { ThemeCtx } from "../hooks/useTheme.tsx"

export const Input = (props: Props) => (
  <ThemeCtx.Consumer>
    { ({ darkMode }) => (
      <label htmlFor={ props.id } className={ props?.className }>
        <strong>{ props.labelName }</strong>
        <p>{ String(darkMode) }</p>
        <input
          id={ props.id }
          className={ [
            "block box-border",
            "text-lg",
            "text-slate-300/80",
            "w-full",
            "mt-1 py-1 px-3",
            "rounded-lg shadow-sm",
            darkMode ? "bg-slate-800" : "bg-slate-300",
            "placeholder-gray-900/40",
            darkMode ? "border border-slate-500" : "border border-slate-100",
            "focus:outline-none",
            darkMode ? "focus:bg-slate-700" : "focus:bg-slate-200",
            "focus:border-sky-500",
            "focus:ring-1 focus:ring-sky-300/90",
            "peer"
          ].join(" ") }
          type={ props.type }
          value={ props?.value }
          onChange={ props.onChange }
          placeholder={ String(darkMode) }
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