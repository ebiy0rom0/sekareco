import React, { useState } from "react";
import { Spinner } from "~/components/atoms/Spinner.tsx";

export const Music = React.memo((props: Props) => {
  const [preload, setPreload] = useState<boolean>(false);

  return (
    <div className="relative items-center h-full">
      <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-bold text-sm text-slate-800 indent-1.5">
        {props.title}
      </label>
      <img
        src={`https://assets.sekareco.jp${props.url}`}
        className={`rounded lg:rounded-l w-[150px] lg:w-[70px] ${preload ? "" : "hidden"}`}
        onError={(e) => (e.target as HTMLImageElement).src = "assets/logo.svg"}
        onLoad={() => setPreload(true)}
      />
      {!preload && (
        <div className="rounded h-[70px] w-[70px] flex items-center justify-center bg-slate-500 pb-4">
          <Spinner />
        </div>
      )}
      <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-semibold text-sm text-slate-800 indent-1.5">
        {props.title}
      </label>
    </div>
  );
});

type Props = {
  title: string;
  url: string;
};
