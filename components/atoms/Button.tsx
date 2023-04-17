import { Spinner } from "~/components/atoms/Spinner.tsx";

export const Button = (props: Props) => (
  <button
    type={props?.type ?? "button"}
    className={`
      inline-flex items-center justify-center
      text-lg font-bold
      border-none
      rounded-lg
      ${props?.className}
    `}
    onClick={props?.onClick}
    disabled={props?.wait ?? false}
  >
    {props?.wait && <Spinner />}
    {props.children}
  </button>
);

type Props = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  children: string | React.ReactNode;
  onClick?: () => void | Promise<void>;
  wait?: boolean;
};
