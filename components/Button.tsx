
export const Button = (props: Props) => (
  <button
    className={ [
      "text-lg",
      "font-bold",
      "py-2",
      "px-4",
      "border-none",
      "rounded-lg",
      props?.className,
    ].join(" ") }
    onClick={ props?.onClick }
    disabled={ props?.wait ?? false }
  >
    { props.children }
  </button>
)

type Props = {
  className?: string
  children: string | React.ReactNode
  onClick?: () => void | Promise<void>
  wait?: boolean
}