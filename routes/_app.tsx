import React, { useRef } from "react"
import { useRouter } from "aleph/react";
import { Head } from "aleph/react";
import { Header } from "~/components/organisms/Header.tsx";
import { Footer } from "~/components/organisms/Footer.tsx";
import { Navigation } from "~/components/organisms/Navigation.tsx";
import { ThemeConsumer, useTheme } from "~/hooks/useTheme.tsx";

const MyApp: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const ThemeProvider = useTheme();

  const screenRef = useRef<HTMLDivElement>(null)

  const overRay = () => {
    screenRef.current?.classList.toggle("-translate-x-full")
  }

  return (
    <React.Suspense fallback={<div className={`static w-full h-full place-content-center`}>Loading...</div>}>
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
                  ? (
                    <>
                      <div
                        className={`sticky top-0 z-20 w-full flex-none border-b ${
                          darkMode ? "border-slate-200/40" : "border-slate-400/30"
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
                          w-[15rem]
                          min-h-screen
                          pl-10 py-5
                          justify-center
                          hidden
                          2xl:block
                          border-l ${darkMode ? "border-slate-200/40" : "border-slate-400/30"}
                        `}
                        >
                          <Navigation />
                        </div>
                        <div className="2xl:mr-[15rem] px-2 lg:px-15 2xl:px-8 items-center">
                          <div className="mx-5">
                            {children}
                          </div>
                          <div
                            className={`
                            border-t ${darkMode ? "border-slate-200/40" : "border-slate-400/30"}
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
                    <div className="relative mx-auto w-full h-[100vh] items-center overflow-hidden">
                      <div className={`relative flex flex-col w-2/5 items-center z-10 bg-slate-100 h-full`} onClick={()=>overRay()}>
                        <div className="flex flex-col justify-end min-h-[77vh] animated animated-fade-in">
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
                        <svg className="absolute inset-y-0 -right-0 hidden h-full w-60 fill-slate-100 translate-x-1/2 transform lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                          <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>
                      </div>
                      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 bg-slate-300">
                      </div>
                      <div className={`absolute -translate-x-full top-0 w-full z-10 bg-slate-100 h-full transition ease-in-out duration-700`} ref={screenRef} onClick={()=>overRay()}>
                        <svg className="absolute inset-y-0 -right-0 hidden h-full w-60 fill-slate-100 translate-x-1/2 transform lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                          <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>
                      </div>
                    </div>
                  )}
              </div>
            </>
          )}
        </ThemeConsumer>
      </ThemeProvider>
    </React.Suspense>
  );
};

type Props = {
  children: React.ReactNode;
};

export default MyApp;
