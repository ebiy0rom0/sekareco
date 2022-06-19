
export const Button = (props: Props) => (
  <button
    className={ [
      "text-lg",
      "font-bold",
      "py-2",
      "px-4",
      "border-none",
      "rounded",
      props?.className
    ].join(" ") }
    onClick={ props?.onClick }
  >
    { props.children }
  </button>
)

type Props = {
  className?: string
  children: string
  onClick?: () => void
}