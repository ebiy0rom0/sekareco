import { useEffect, useRef, useState } from "react";
import { ThemeCtx } from "~/hooks/useTheme.tsx";
import { ClearStatus, clearStatus, Difficulty } from "~/types/index.ts";
import { Clear } from "~/components/atoms/Clear.tsx";
import { Score } from "~/components/atoms/Score.tsx";
import { Difficulty as DiffComponent } from "~/components/atoms/Difficulty.tsx";
import { Music } from "~/components/atoms/Music.tsx";

export const Record = (props: Props) => {
  const [view, setView] = useState(true);
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
            divide-x-3
            flex rounded items-center
            ${view ? "opacity-100" : "opacity-0 -translate-y-6"}
            transition duration-700 ease-out
            ${
            darkMode
              ? "bg-slate-700/80 \
              hover:bg-slate-600/80 \
              shadow-slate-400/30 shadow-lg divide-stone-200/10"
              : "bg-slate-300/60 \
              hover:bg-slate-400/40 \
              shadow-lg divide-zinc-300/60"
          }`}
        >
          <div className="music__master w-[18rem]">
            <Music title={props.title} url={props.url} />
          </div>
          <div className="music__record w-full h-full grid content-evenly">
            <div className="difficulty grid grid-cols-5 auto-cols-fr justify-items-center">
              {Object.values(props.filter).map((v) => (
                <div className="-ml-15">
                  <DiffComponent
                    key={v.toString()}
                    difficulty={v}
                    level={props.level[v]}
                  />
                </div>
              ))}
            </div>
            <div className="record grid grid-cols-5 auto-cols-fr">
              {Object.values(props.filter).map((v) => (
                <div
                  key={v.toString()}
                  className="h-[20px] min-w-fit grid grid-flow-col -ml-4 justify-center gap-3"
                >
                  <div className="w-30">
                    <Score score={props.score[v]} notes={props.notes[v]} />
                  </div>
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
  score: number[];
  filter: Difficulty[];
  level: number[];
  notes: number[];
  increment: (c: ClearStatus) => void;
  decrement: (c: ClearStatus) => void;
};
