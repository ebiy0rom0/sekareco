
export const Button = (props: Props) => (
  <button
    className={ ["py-3 px-4 border-none rounded font-bold", props?.className].join(" ") }
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