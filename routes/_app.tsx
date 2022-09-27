import { useRouter } from "aleph/react";
import { Head } from "aleph/react";
import { Header } from "~/components/organisms/Header.tsx";
import { Footer } from "~/components/organisms/Footer.tsx";
import { Navigation } from "~/components/organisms/Navigation.tsx";
import { ThemeCtx, useTheme } from "~/hooks/useTheme.tsx";

const MyApp: React.FC<Props> = (props) => {
  const router = useRouter();
  const ThemeProvider = useTheme();

  return (
    <ThemeProvider>
      <ThemeCtx.Consumer>
        {({ darkMode }) => (
          <>
            <Head>
              <title>プロセカの記録帳</title>
            </Head>
            <div
              className={`${
                darkMode
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-100 text-slate-800"
              }`}
            >
              {router.url.pathname !== "/"
                ? (
                  <>
                    <div
                      className={`sticky top-0 z-20 w-full flex-none border-b ${
                        darkMode ? "border-slate-200/20" : "border-slate-400/30"
                      } backdrop-blur-md`}
                    >
                      <div className="max-w-[110rem] px-10 py-2 mx-auto">
                        <Header />
                      </div>
                    </div>
                    <div className="max-w-[100rem] mx-auto py-8">
                      <div
                        className={`
                        fixed
                        box-border
                        right-[max(0px,calc(50%-50rem))]
                        w-[17rem]
                        min-h-screen
                        pl-10 py-5
                        justify-center
                        border-l ${
                          darkMode
                            ? "border-slate-200/20"
                            : "border-slate-400/30"
                        }
                      `}
                      >
                        <Navigation />
                      </div>
                      <div className="mr-[20rem] px-5 items-center">
                        <div className="mx-5">
                          {props.children}
                        </div>
                        <div
                          className={`
                          border-t ${
                            darkMode
                              ? "border-slate-200/20"
                              : "border-slate-400/30"
                          }
                          mt-10 pt-15 pb-7
                        `}
                        >
                          <Footer />
                        </div>
                      </div>
                    </div>
                  </>
                )
                : (
                  <div className="flex flex-col max-w-[100em] mx-auto w-4/5 py-8 items-center">
                    <div className="flex min-h-[77vh] justify-around place-items-center">
                      {props.children}
                    </div>
                    <div
                      className={`
                      border-t ${
                        darkMode ? "border-slate-200/20" : "border-slate-400/30"
                      }
                      mt-6 pt-15 pb-10
                      min-w-full
                    `}
                    >
                      <Footer />
                    </div>
                  </div>
                )}
            </div>
          </>
        )}
      </ThemeCtx.Consumer>
    </ThemeProvider>
  );
};

type Props = {
  children: React.ReactNode;
};

export default MyApp;
