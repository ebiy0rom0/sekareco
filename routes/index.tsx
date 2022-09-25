import { useEffect, useState } from "react";
import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx";
import { GithubIcon } from "~/components/atoms/GithubIcon.tsx";
import { SignInForm } from "~/components/organisms/SignInForm.tsx";
import { SignUpForm } from "~/components/organisms/SignUpForm.tsx";
import { ThemeCtx } from "~/hooks/useTheme.tsx";
import { useDelayCallback } from "~/utils/useDelayCallback.ts";
import { useModal } from "~/hooks/useModal.tsx";

const Index: React.FC = () => {
  const { render, open } = useModal();

  return (
    <ThemeCtx.Consumer>
      {({ darkMode, switchMode }) => (
        <>
          <div className="grid gap-y-5">
            <div className="flex gap-x-5">
              {"プロセカの".split("").map((s, i) => (
                <h1 key={i.toString()}>
                  <span
                    className={"text-6xl font-bold" + (i == 0
                      ? " text-cyan-400"
                      : darkMode
                      ? " text-slate-300"
                      : " text-slate-600")}
                  >
                    {s}
                  </span>
                </h1>
              ))}
            </div>
            <div className="flex gap-x-5 flex-row-reverse mt-5">
              {"記録帳".split("").reverse().map((s, i) => (
                <h1 key={i.toString()}>
                  <span
                    className={"text-6xl font-bold" + (i == 2
                      ? " text-pink-500/90"
                      : darkMode
                      ? " text-slate-300"
                      : " text-slate-600")}
                  >
                    {s}
                  </span>
                </h1>
              ))}
            </div>
            <div className="flex items-center overflow-hidden bg-slate-400 w-[384px] h-[256px] rounded-lg">
              <img
                className="w-[120%] fade"
                key={Math.random()}
              />
            </div>
            <div className="flex flex-row-reverse mt-5 gap-x-9">
              <GithubIcon />
              <Toggle
                mode={!darkMode}
                style={ToggleStyle.THEME}
                role={switchMode}
              />
            </div>
          </div>
          <div className="grid p-7 ml-[10em] mr-5 rounded-2xl min-w-[23.0rem]">
            <SignInForm />
            <button
              type="button"
              className="
                mt-7
                border-none
                bg-transparent
                text-lg text-slate-400
                justify-self-end
              "
              onClick={open}
            >
              click here to sign up.
            </button>
          </div>
          {render(
            <div className="min-w-[23.0rem]">
              <SignUpForm />
            </div>,
          )}
        </>
      )}
    </ThemeCtx.Consumer>
  );
};

export default Index;
