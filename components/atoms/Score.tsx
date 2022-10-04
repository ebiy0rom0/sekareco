import React from "react";

export const Score = React.memo((props: Props) => {
  const max = (props.notes * 3);
  const score = props.score ?? 0;

  return (
    <div className="font-semibold tracking-wide flex flex-row gap-1 text-[0.95em]">
      <span
        className={`w-full text-end ${score < max ? "text-rose-500" : "text-emerald-500"}`}
      >
        {props?.diff ? `${score - max}` : score}
      </span>
      <span>/</span>
      <span className="w-full text-end -ml-3">{props.notes * 3}</span>
    </div>
  );
});

type Props = {
  score: number;
  notes: number;
  diff?: boolean;
};
