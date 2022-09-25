export const Checkbox = (props: Props) => (
  <label className={props?.className}>
    {props.children}
    <input
      type="checkbox"
      className="ml-2"
      name={props.name}
      value={props.value}
      checked={props.isChecked}
      onChange={(e) => props.setter(e.target.value)}
    />
  </label>
);

type Props = JSX.IntrinsicElements["input"] & {
  children: string | number;
  name: string;
  className?: string;
  isChecked: boolean;
  setter: (d: string) => void;
};
