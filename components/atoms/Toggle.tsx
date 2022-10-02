import Icon, {ICON_SUN, ICON_MOON} from "~/components/atoms/Icon.tsx";

export const Toggle = (props: Props) => (
  <div
    className={"grid gap-x-3 w-[50px] h-[25px] rounded-full " + (props.mode
      ? "justify-items-start bg-gray-300"
      : "justify-items-end bg-gray-600")}
    onClick={props.role}
  >
    <div
      className={"grid place-items-center rounded-full bg-slate-700 w-[25px] scale-120 ring-1 " +
        (props.mode ? "bg-white toggle-on" : "bg-slate-900 toggle-off")}
    >
      <Selector style={props.style} mode={props.mode} />
    </div>
  </div>
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
