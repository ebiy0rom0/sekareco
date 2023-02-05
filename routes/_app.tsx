import { useEffect } from "react";
import { useRouter } from "aleph/react";
import { Head } from "aleph/react";
import { Page } from "~/components/layouts/Page.tsx";
import { Hero } from "~/components/layouts/Hero.tsx";
import { ThemeConsumer, useTheme } from "~/hooks/useTheme.tsx";
import Policy from "~/routes/policy.tsx";

const MyApp: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const ThemeProvider = useTheme();

  // const screenRef = useRef<HTMLDivElement>(null)

  // const overRay = () => {
  //   screenRef.current?.classList.toggle("-translate-x-full")
  // }
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({ darkMode }) => (
          <>
            <Head>
              <title>プロセカの記録帳</title>
            </Head>
            <div
              className={`${
                darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-800"
              }`}
            >
              {router.url.pathname !== "/" ? (<Page>{ children }</Page>) : (<Hero>{ children }</Hero>)}
            </div>
          </>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};

type Props = {
  children: React.ReactNode;
};

export default MyApp;
