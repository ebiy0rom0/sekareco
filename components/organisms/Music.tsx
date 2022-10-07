import React from "react";

export const Music = React.memo((props: Props) => (
  <div className="relative items-center h-full">
    <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-bold text-sm text-slate-800 indent-1.5">
      {props.title}
    </label>
    <img
      src={`https://assets.sekareco.jp${props.url}`}
      className="rounded-l w-[120px] lg:w-[70px]"
      onError={(e) =>
        (e.target as HTMLImageElement).src = "assets/logo.svg"}
    />
    <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-semibold text-sm text-slate-800 indent-1.5">
      {props.title}
    </label>
  </div>
));

type Props = {
  title: string;
  url: string;
};
