import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Checkbox = <T extends string | number>(props: Props<T>) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <div className="flex items-center">
        <input
          id={props.id}
          type="checkbox"
          className={`h-4 w-4 rounded ${
            darkMode ? "bg-slate-700 border-gray-500" : "border-gray-300"
          } text-indigo-600 focus:outline-none focus:ring-2 focus:border-indigo-400`}
          value={props.value}
          checked={props.checked}
          onChange={(e) => props.handler(e.target.value)}
        />
        <label htmlFor={props.id} className="ml-3 text-sm">{props.children}</label>
      </div>
    )}
  </ThemeConsumer>
);

type Props<T> = {
  id: string;
  children: string | number;
  value: T;
  checked: boolean;
  handler: (d: string) => void;
};
