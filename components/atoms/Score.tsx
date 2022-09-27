import React from "react";

export const Score = React.memo((props: Props) => (
  <div className="font-semibold">
    <span className={`${ props.score < (props.notes * 3) ? "text-rose-400" : "text-green-500" }`}>{props.score}</span>
    /
    <span>{props.notes * 3}</span>
  </div>
))

type Props = {
  score: number
  notes: number
}