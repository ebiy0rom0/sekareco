import React, { useState } from "react";

export const Music = React.memo((props: Props) => {
  const [preload, setPreload] = useState<boolean>(false)

  const img = new Image()
  img.src = `https://assets.sekareco.jp${props.url}`
  img.onload = () => setPreload(true)

  return (
    <div className="relative items-center h-full">
      <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-bold text-sm text-slate-800 indent-1.5">
        {props.title}
      </label>
      {preload ? (
        <img
          src={`https://assets.sekareco.jp${props.url}`}
          className="rounded lg:rounded-l w-[150px] lg:w-[70px]"
          onError={(e) =>
            (e.target as HTMLImageElement).src = "assets/logo.svg"
          }
        />) : <div className="h-[70px] w-[70px] text-center">wait...</div>
      }
      <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-semibold text-sm text-slate-800 indent-1.5">
        {props.title}
      </label>
    </div>
  )}
);

type Props = {
  title: string;
  url: string;
};
