import { FC, useState } from "react";
import { Spinner } from "~/components/atoms/Spinner.tsx";

export const Image: FC<Props> = ({ url, alt }) => {
  const [preload, setPreload] = useState<boolean>(false);

  return (
    <>
      <img
        src={`C:/Users/user/Documents/wk/sekareco/sekareco_assets${url}`}
        className={`rounded lg:rounded-l w-[150px] lg:w-[70px] ${preload ? "" : "hidden"}`}
        onError={(e) => (e.target as HTMLImageElement).src = "assets/logo.svg"}
        onLoad={() => setPreload(true)}
        alt={alt}
      />
        {!preload && (
          <div className="rounded h-[70px] w-[70px] flex items-center justify-center bg-slate-500 pb-4">
            <Spinner />
          </div>
        )}
    </>
  )
}

type Props = {
  url: string;
  alt: string;
}