import { FC, ReactNode } from "react";
import { Header } from "~/components/organisms/Header.tsx";
import { Footer } from "~/components/organisms/Footer.tsx";
import { Navigation } from "~/components/organisms/Navigation.tsx";
import { SideNavigation } from "~/components/organisms/SideNavigation.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Page: FC<Props> = ({ children }) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <>
        <SideNavigation />
        <div
          className={`sticky top-0 z-20 w-full flex-none border-b ${
            darkMode ? "border-slate-200/40" : "border-slate-400/30"
          } backdrop-blur-md`}
        >
          <div className="max-w-[110rem] px-4 sm:px-10 py-2 mx-auto">
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
                mt-10 pt-10 mx-5 pb-5 md:px-10
              `}
            >
              <Footer />
            </div>
          </div>
        </div>
      </>
    )}
  </ThemeConsumer>
);

type Props = {
  children: ReactNode;
};
