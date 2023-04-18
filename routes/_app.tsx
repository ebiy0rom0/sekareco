import { useRouter } from "aleph/react";
import { useI18n } from "~/hooks/useI18n.ts";
import { Head } from "aleph/react";
import { Page } from "~/components/templates/Page.tsx";
import { Hero } from "~/components/templates/Hero.tsx";
import { ThemeProvider, useTheme } from "~/hooks/useTheme.tsx";

const Provider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <App>{ children }</App>
    </ThemeProvider>
  );
};

const App: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { t } = useI18n();
  const { dark } = useTheme();

  return (
    <>
      <Head>
        <title>{t.TITLE}</title>
      </Head>
      <div
        className={`${
          dark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-800"
        }`}
      >
        {router.url.pathname !== "/" ? <Page>{children}</Page> : <Hero>{children}</Hero>}
      </div>
    </>
  )
}

type Props = {
  children: React.ReactNode;
};

export default Provider;
