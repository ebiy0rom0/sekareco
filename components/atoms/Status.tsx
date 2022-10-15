import React from "react";
import { STATUS, StatusValues } from "~/types/index.ts";

export const Status = React.memo((props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    className={`rounded border-2 border-black ${fillSet[props.status]} rotate-45`}
  />
));

type Props = {
  class?: string;
  status: StatusValues;
};

const fillSet = {
  [STATUS.NOPLAY]: "bg-slate-600",
  [STATUS.CLEAR]: "bg-gradient-to-br from-yellow-300 to-yellow-500",
  [STATUS.FULL_COMBO]: "bg-gradient-to-br from-fuchsia-300 to-fuchsia-400",
  [STATUS.ALL_PERFECT]: "bg-gradient-to-br from-fuchsia-400 to-cyan-300",
}
