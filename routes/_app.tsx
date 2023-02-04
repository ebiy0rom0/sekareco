import { useEffect } from "react";
import { useRouter } from "aleph/react";
import { PageLayout } from "~/components/layouts/Page.tsx";
import { Head } from "aleph/react";
import { Footer } from "~/components/organisms/Footer.tsx";
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
              {router.url.pathname !== "/"
                ? (<PageLayout>{ children }</PageLayout>)
                : (
                  <div className="relative mx-auto w-full h-[100vh] items-center overflow-hidden">
                    <div
                      className={`relative flex flex-col lg:w-1/2 items-center h-full z-10 ${
                        darkMode ? "bg-slate-800" : "bg-slate-100"
                      }`}
                    >
                      <div className="flex items-end min-h-[77vh] animated animated-fade-in">
                        {children}
                      </div>
                      <div
                        className={`
                      mt-20 pt-15 pb-10
                      w-min-full
                    `}
                      >
                        <Footer />
                      </div>
                      <svg
                        className={`absolute inset-y-0 -right-0 hidden h-full w-60 translate-x-1/2 transform hidden lg:block ${
                          darkMode ? "fill-slate-800" : "fill-slate-100"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <polygon points="50,0 100,0 50,100 0,100"></polygon>
                      </svg>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 bg-slate-500 animated animated-fast animated-slide-in-up animated-delay-500ms">
                    </div>
                    <div
                      className={`absolute flex items-center flex-wrap animated animated-slide-in-right animated-delay-1s ${
                        darkMode ? "bg-slate-900" : "bg-slate-200"
                      } inset-y-0 -right-30 py-auto px-10 w-[55%] z-10`}
                    >
                      <svg
                        className={`absolute inset-y-0 left-0 hidden h-full w-60 -translate-x-1/2 transform hidden lg:block ${
                          darkMode ? "fill-slate-900" : "fill-slate-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <polygon points="50,0 100,0 50,100 0,100"></polygon>
                      </svg>
                      <div className="w-full z-10">
                        <Policy />
                      </div>
                    </div>
                  </div>
                )}
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
