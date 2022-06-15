import React from "react"

export const Input = (props: Props) => (
  <label>
    { props.labelName }
    <input type={ props.type } value={ props?.value } onChange={ props.onChange } />
  </label>
)

type Props = {
  labelName: string
  type: "text" | "password"
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}