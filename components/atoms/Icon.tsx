import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Icon = (props: Props) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <img
        src={`${assetPath}${props.icon}${fileExtension}`}
        height={props?.size ?? 25}
        width={props?.size ?? 25}
        title={props?.title}
        className={darkMode ? "invert" : ""}
      />
    )}
  </ThemeConsumer>
);

type Props = {
  size?: number;
  title?: string;
  icon: typeof Icons[number];
};

const assetPath = "assets/";
const fileExtension = ".svg";

// icon list
export const ICON_CLOSE = "close";
export const ICON_FILTER = "filter";
export const ICON_GITHUB = "github";
export const ICON_LOGO = "logo";
export const ICON_MENU = "menu";
export const ICON_MINUS = "minus";
export const ICON_MOON = "moon";
export const ICON_PLUS = "plus";
export const ICON_SORT = "sort";
export const ICON_SUN = "sun";

const Icons = [
  ICON_CLOSE,
  ICON_FILTER,
  ICON_GITHUB,
  ICON_LOGO,
  ICON_MENU,
  ICON_MINUS,
  ICON_MOON,
  ICON_PLUS,
  ICON_SORT,
  ICON_SUN,
] as const;
