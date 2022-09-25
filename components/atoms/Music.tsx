import React from "react";

export const Music = React.memo((props: Props) => (
  <div className={["relative", props?.className].join(" ")}>
    <label className="absolute inset-x-0 bottom-0 bg-white/65 font-semibold text-xs text-slate-800 indent-1.5">
      {props.title}
    </label>
    <img
      height="60"
      width="60"
      src={props.url}
      className="inline-block rounded-l"
      onError={(e) =>
        (e.target as HTMLImageElement).src = "/assets/logo.svg"}
    />
  </div>
));

type Props = {
  className?: string;
  title: string;
  url: string;
};
