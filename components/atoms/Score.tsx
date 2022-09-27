import React from "react";

export const Score = React.memo((props: Props) => {
  const max = (props.notes * 3)
  const score = props.score ?? 0
  const prefix = (max - score) > 0 ? "-" : "±"

  return (
    <div className="font-semibold tracking-wide">
      <span
        className={`${
          score < max
            ? "text-rose-500"
            : "text-emerald-500"
        }`}
      >
        {!props?.diff ? score : `${prefix}${max - score}`}
      </span>
      /
      <span>{props.notes * 3}</span>
    </div>
  )
});

type Props = {
  score: number;
  notes: number;
  diff?: boolean;
};
