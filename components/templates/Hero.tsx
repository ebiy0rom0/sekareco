import { FC, ReactNode } from "react";
import Policy from "~/routes/policy.tsx";
import { useModal } from "~/hooks/useModal.tsx";
import { useTheme } from "~/hooks/useTheme.tsx";

export const Hero: FC<Props> = ({ children }) => {
  const { dark } = useTheme();

  return (
    <div className="relative mx-auto px-5 md:px-0 w-full h-[100vh] items-center overflow-hidden">
      <div
        className={`relative flex flex-col lg:w-[45%] items-center h-full z-10 ${
          dark ? "bg-slate-800" : "bg-slate-100"
        }`}
      >
        <div className="flex items-end min-h-[77vh] animated animated-fade-in">
          {children}
        </div>
        <svg
          className={`absolute inset-y-0 -right-0 hidden h-full w-60 translate-x-1/2 transform hidden xl:block ${
            dark ? "fill-slate-800" : "fill-slate-100"
          }`}
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="30,0 100,0 70,100 0,100"></polygon>
        </svg>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 animated animated-slide-in-right z-100">
        <img className="max-w-none rounded-md ring-1 ring-white/10 translate-x-1/16 backdrop-opacity-50 mt-32" src={`${dark ? "assets/hero_dark.jpg" : "assets/hero_light.jpg"}`} />
      </div>
      {
        /* <div
        className={`absolute flex items-center flex-wrap animated animated-slide-in-right animated-delay-2s ${
          darkMode ? "bg-slate-900" : "bg-slate-200"
        } inset-y-0 lg:-right-0 xl:-right-30 py-auto px-10 w-full lg:w-[50%] xl:w-[55%] z-10`}
      >
        <svg
          className={`absolute inset-y-0 left-0 hidden h-full w-60 -translate-x-1/2 transform hidden xl:block ${
            darkMode ? "fill-slate-900" : "fill-slate-200"
          }`}
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
        <button></button>
        <div className="w-full z-10">
          <Policy />
        </div>
      </div> */
      }
    </div>
  );
}

type Props = {
  children: ReactNode;
};
