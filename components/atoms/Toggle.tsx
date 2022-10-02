import Icon, {ICON_SUN, ICON_MOON} from "~/components/atoms/Icon.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Toggle = (props: Props) => (
  <ThemeConsumer>
    {({darkMode}) => (
      <div
        className={`grid gap-x-3 w-[50px] h-[25px] rounded-full
        ${props.mode ? "justify-items-start" : "justify-items-end"}
        ${darkMode ? "bg-gray-600" : "bg-gray-300"}`
      }
        onClick={props.role}
      >
        <div
          className={`grid place-items-center rounded-full bg-slate-700 w-[25px] scale-120 ring-1
            ${props.mode ? "toggle-on" : "toggle-off"}
            ${darkMode ? "bg-slate-900" : "bg-white"}`
          }
        >
          <Selector style={props.style} mode={props.mode} />
        </div>
      </div>
    )}
  </ThemeConsumer>
);

const Default = () => (<></>);

const Theme = (props: { mode: boolean }) => (
  <Icon icon={props.mode ? ICON_SUN : ICON_MOON} size={18} />
);

const Selector = (props: {
  style: typeof ToggleStyle[keyof typeof ToggleStyle];
  mode: boolean;
}) => {
  switch (props.style) {
    case ToggleStyle.DEFAULT:
      return <Default />;
    case ToggleStyle.THEME:
      return <Theme mode={props.mode} />;
  }
};

type Props = {
  style: typeof ToggleStyle[keyof typeof ToggleStyle];
  mode: boolean;
  role: () => void;
};

export const ToggleStyle = {
  DEFAULT: 1,
  THEME: 2,
} as const;
