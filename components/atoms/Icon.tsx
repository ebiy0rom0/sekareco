import { ThemeCtx } from "~/hooks/useTheme.tsx";

export default (props: Props) => (
  <ThemeCtx.Consumer>
    {({ darkMode }) => (
      <button type="button">
        <span className="sr-only">Link to GitHub</span>
        <img
          src={`${assetPath}${props.icon}${fileExtension}`}
          height={props?.size ?? 25}
          width={props?.size ?? 25}
          title="GitHub"
          className={"hover:opacity-70" +
            (darkMode ? " invert" : "")}
        />
      </button>
    )}
  </ThemeCtx.Consumer>
);

type Props = {
  size?: number;
  icon: typeof IconList[number];
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

const IconList = [
  ICON_CLOSE,
  ICON_FILTER,
  ICON_GITHUB,
  ICON_LOGO,
  ICON_MENU,
  ICON_MINUS,
  ICON_MOON,
  ICON_PLUS,
  ICON_SORT,
  ICON_SUN
] as const;
