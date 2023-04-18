import { Toggle, ToggleStyle } from "~/components/atoms/Toggle.tsx";
import { Icon, ICON_GITHUB } from "~/components/atoms/Icon.tsx";
import { SignInForm } from "~/components/organisms/SignInForm.tsx";
import { SignUpForm } from "~/components/organisms/SignUpForm.tsx";
import { useTheme } from "~/hooks/useTheme.tsx";
import { useModal } from "~/hooks/useModal.tsx";
import { FC } from "react";

const Index: FC = () => {
  const { dark, switchTheme } = useTheme();
  const { render, open } = useModal(() => {});

  return (
    <div className="grid gap-y-5 mx-atuo">
      <div className="flex gap-x-5">
        {"プロセカの".split("").map((s, i) => (
          <span
            key={i.toString()}
            className={`text-5xl font-bold
              ${i == 0 ? " text-cyan-400" : dark ? " text-slate-300" : " text-slate-600"}`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-x-5 flex-row-reverse mt-5">
        {"記録帳".split("").reverse().map((s, i) => (
          <span
            key={i.toString()}
            className={`text-5xl font-bold
              ${
              i == 2 ? " text-pink-500/90" : dark ? " text-slate-300" : " text-slate-600"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="min-w-[25.0rem]">
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
        <div className="flex flex-row-reverse mt-5 gap-x-9">
          <Icon icon={ICON_GITHUB} />
          <Toggle
            mode={!dark}
            style={ToggleStyle.THEME}
            role={switchTheme}
          />
        </div>
      </div>
      {render(
        <div className="min-w-[23.0rem]">
          <SignUpForm />
        </div>,
      )}
    </div>
  );
};

export default Index;
