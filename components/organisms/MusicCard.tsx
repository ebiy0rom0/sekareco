import React, { useState } from "react";
import { Image } from "~/components/atoms/Image.tsx";

export const MusicCard = React.memo((props: Props) => {
  return (
    <div className="relative items-center h-full">
      {
        /* <label className="absolute break-all inset-x-0 bottom-0 rounded-bl bg-white/65 font-bold text-sm text-slate-800 indent-1.5">
        {props.title}
      </label> */
      }
      <Image url={props.url} alt={props.title} />
    </div>
  );
});

type Props = {
  title: string;
  url: string;
};
