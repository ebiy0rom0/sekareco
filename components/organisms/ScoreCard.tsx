import { memo, useEffect, useRef, useState } from "react";
import { DifficultyValues, STATUS, StatusValues } from "~/types/index.ts";
import { Status } from "~/components/atoms/Status.tsx";
import { Score } from "~/components/atoms/Score.tsx";
import { Difficulty } from "~/components/atoms/Difficulty.tsx";
import { Image } from "~/components/atoms/Image.tsx";
import { useTheme } from "~/hooks/useTheme.tsx";

export const ScoreCard = memo<Props>(({ music, diff, status, score, filter }) => {
  const { dark } = useTheme();

  const [view, setView] = useState(true);
  const recordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const clientRect = recordRef.current?.getBoundingClientRect();

      if (clientRect === undefined) return;

      const check = view
        ? clientRect.top <= (window.innerHeight * 1.05)
        : clientRect.top <= (window.innerHeight * 0.95);
      setView(check);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={recordRef}
      className={`
        hidden
        relative
        h-full divide-x-3
        flex rounded
        ${view ? "opacity-100" : "opacity-0 -translate-y-3"}
        transition duration-700 ease-out shadow-lg
        ${
        dark
          ? "bg-slate-700/80 \
          hover:bg-slate-600/80 \
          shadow-slate-400/30 divide-stone-200/10"
          : "bg-slate-300/60 \
          hover:bg-slate-400/40 \
          divide-zinc-300/60"
      }`}
    >
      <div className="music__master w-70 lg:w-24">
        <Image url={music.jacketUrl} alt={music.title} />
      </div>
      <div className="music__record relative w-full h-full content-end grid grid-cols-2 lg:grid-cols-1 px-2 py-3 gap-y-1">
        <label
          className={`absolute break-all truncate inset-x-0 top-0  rounded-tr font-bold text-sm indent-1.5 px-1 ${
            dark ? "bg-slate-500/55 text-slate-300" : "bg-slate-400/25 text-slate-700"
          }`}
        >
          {music.title}
        </label>
        <div className="difficulty grid grid-cols-none lg:grid-cols-5 auto-cols-fr gap-y-2 mt-5">
          {Object.values(filter).map((v) => (
            <div key={v.toString()}>
              <Difficulty
                difficulty={v}
                level={music.level[v]}
              />
            </div>
          ))}
        </div>
        <div className="record grid grid-cols-none lg:grid-cols-5 auto-cols-fr gap-y-2 mt-5 lg:mt-0">
          {Object.values(filter).map((v) => (
            <div
              key={v.toString()}
              className="h-[20px] min-w-fit grid grid-flow-col -ml-4 justify-center content-bottom gap-1"
            >
              <div className="w-28 mt-1 mr-1">
                <Score score={score[v]} notes={music.notes[v]} diff={diff} />
              </div>
              <Status status={status[v] ?? STATUS.NOPLAY} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

type Props = {
  music: Music;
  diff: boolean;
  status: StatusValues[];
  score: number[];
  filter: DifficultyValues[];
};
