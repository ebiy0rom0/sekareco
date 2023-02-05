import { useRouter } from "aleph/react";
import { useI18n } from "~/hooks/useI18n.ts";
import { Head } from "aleph/react";
import { Page } from "~/components/templates/Page.tsx";
import { Hero } from "~/components/templates/Hero.tsx";
import { ThemeConsumer, useTheme } from "~/hooks/useTheme.tsx";

const MyApp: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const ThemeProvider = useTheme();
  const { t } = useI18n();

  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({ darkMode }) => (
          <>
            <Head>
              <title>{ t.TITLE }</title>
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
