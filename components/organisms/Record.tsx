import { useEffect, useRef, useState } from "react";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { ClearStatus, clearStatus, Difficulty } from "~/types/index.ts";
import { Status } from "~/components/atoms/Status.tsx";
import { Score } from "~/components/atoms/Score.tsx";
import { Difficulty as DiffComponent } from "~/components/atoms/Difficulty.tsx";
import { Music } from "~/components/organisms/Music.tsx";

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
    <ThemeConsumer>
      {({ darkMode }) => (
        <div
          ref={recordRef}
          className={`
            h-full divide-x-3 py-3 lg:py-0
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
            <Music title={props.title} url={props.jacketUrl} />
          </div>
          <div className="music__record w-full h-full content-center grid grid-cols-2 lg:grid-cols-1 px-2 gap-y-1 pl-2">
            <div className="difficulty grid grid-cols-none lg:grid-cols-5 auto-cols-fr gap-y-2">
              {Object.values(props.filter).map((v) => (
                <div key={v.toString()}>
                  <DiffComponent
                    difficulty={v}
                    level={props.level[v]}
                  />
                </div>
              ))}
            </div>
            <div className="record grid grid-cols-none lg:grid-cols-5 auto-cols-fr gap-y-2">
              {Object.values(props.filter).map((v) => (
                <div
                  key={v.toString()}
                  className="h-[20px] min-w-fit grid grid-flow-col -ml-4 justify-center gap-1"
                >
                  <div className="w-28 mt-1 mr-0">
                    <Score score={props.score[v]} notes={props.notes[v]} diff={props.diff} />
                  </div>
                  <Status status={props.status[v] ?? clearStatus.NOPLAY} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

type Props = {
  title: string;
  jacketUrl: string;
  diff: boolean;
  status: ClearStatus[];
  score: number[];
  filter: Difficulty[];
  level: number[];
  notes: number[];
};
