export const Checkbox = (props: Props) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
      name={props.name}
      value={props.value}
      checked={props.isChecked}
      onChange={(e) => props.setter(e.target.value)}
    />
    <span className="ml-3 text-sm">{props.children}</span>
  </label>
);

type Props = JSX.IntrinsicElements["input"] & {
  children: string | number;
  name: string;
  isChecked: boolean;
  setter: (d: string) => void;
};
