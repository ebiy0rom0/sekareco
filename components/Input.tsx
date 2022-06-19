import React from "react"

export const Input = (props: Props) => (
  <label htmlFor={ props.id } className={ props?.className }>
    <strong>{ props.labelName }</strong>
    <input
      id={ props.id }
      className="
        block box-border
        text-lg
        text-slate-300/80
        w-full
        mt-1 py-1 px-3
        rounded-lg shadow-sm
        bg-slate-800
        placeholder-gray-200/40
        border border-slate-500
        focus:outline-none
        focus:bg-slate-700
        focus:border-sky-500
        focus:ring-1 focus:ring-sky-300/90
        peer
      "
      type={ props.type }
      value={ props?.value }
      onChange={ props.onChange }
      placeholder={ props?.placeholder }
    />
    <p className="mt-2 invisible peer-required:visible text-red-500">
      { props?.invalidText }
    </p>
  </label>
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