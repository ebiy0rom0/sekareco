import { useEffect, useRef, useState } from "react";
import { ThemeCtx } from "~/hooks/useTheme.tsx";
import { ClearStatus, clearStatus, Difficulty } from "~/types/index.ts";
import { Clear } from "~/components/atoms/Clear.tsx";
import { Difficulty as DiffComponent } from "~/components/atoms/Difficulty.tsx";
import { Music } from "~/components/atoms/Music.tsx";

export const MyRecord = (props: Props) => {
  const [view, setView] = useState(false);
  const recordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const clientRect = recordRef.current?.getBoundingClientRect();

      if (typeof clientRect === "undefined") return;

      const check = view
        ? clientRect.top <= (window.innerHeight * 1.05)
        : clientRect.top <= (window.innerHeight * 0.95);
      setView(check);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeCtx.Consumer>
      {({ darkMode }) => (
        <div
          ref={recordRef}
          className={`
            flex rounded
            ${view ? "opacity-100" : "opacity-0 -translate-y-6"}
            transition duration-700 ease-out
            ${
            darkMode
              ? "bg-slate-700/80 \
              hover:bg-slate-600/80 \
              shadow-slate-400/30 shadow-lg"
              : "bg-slate-300/60 \
              hover:bg-slate-400/40 \
              shadow-lg"
          }`}
        >
          <div className="music__master flex-none w-[18em] border-r">
            <Music title={props.title} url={props.url} />
          </div>
          <div className="music__record w-full flex flex-col py-2 px-3">
            <div className="difficulty grid grid-cols-5 justify-items-center">
              {Object.values(props.filter).map((v) => (
                <DiffComponent
                  key={v.toString()}
                  difficulty={v}
                  level={props.level[v]}
                />
              ))}
            </div>
            <div className="record grid grid-cols-5 mt-1 justify-items-center">
              {Object.values(props.filter).map((v) => (
                <div
                  key={v.toString()}
                  className="text-center h-[20px]"
                >
                  <Clear status={props.result[v] ?? clearStatus.NOPLAY} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ThemeCtx.Consumer>
  );
};

type Props = {
  title: string;
  url: string;
  result: ClearStatus[];
  filter: Difficulty[];
  level: number[];
  increment: (c: ClearStatus) => void;
  decrement: (c: ClearStatus) => void;
};
