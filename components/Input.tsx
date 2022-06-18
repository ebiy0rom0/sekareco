import React from "react"

export const Input = (props: Props) => (
  <label htmlFor={ props.id }>
    <strong>{ props.labelName }</strong>
    <input
      id={ props.id }
      className="block mt-2 py-2 px-3 rounded-lg w-fit border-slate-200 focus:outline-sky-500/80"
      type={ props.type }
      value={ props?.value }
      onChange={ props.onChange }
      placeholder={ props?.placeholder }
    />
  </label>
)

type Props = {
  id: string
  labelName: string
  type: "text" | "password"
  value?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}