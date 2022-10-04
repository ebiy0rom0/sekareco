import React from "react";

export const Music = React.memo((props: Props) => (
  <div className={["relative", props?.className].join(" ")}>
    <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-bold text-sm text-slate-800 indent-1.5">
      {props.title}
    </label>
    <img
      src={`https://assets.sekareco.jp${props.url}`}
      className="rounded-l w-[130px] lg:w-[70px]"
      onError={(e) =>
        (e.target as HTMLImageElement).src = "assets/logo.svg"}
    />
  </div>
));

type Props = {
  className?: string;
  title: string;
  url: string;
};
