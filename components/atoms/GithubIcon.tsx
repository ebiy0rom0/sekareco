
import { ThemeCtx } from "~/hooks/useTheme.tsx"

export const GithubIcon = (props: Props) => (
  <ThemeCtx.Consumer>
    { ({ darkMode }) => (
      <a href="https://github.com/ebiy0rom0/sekareco">
        <span className="sr-only">Link to GitHub</span>
        <img src="/assets/github.svg" height={ props?.size ?? 30 } title="GitHub" className={ "hover:opacity-80 fill-blue-500" + (darkMode ? " invert" : "") } />
      </a>
    )}
  </ThemeCtx.Consumer>
)

type Props = {
  size?: number
}