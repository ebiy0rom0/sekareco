import { FC, useState } from "react";
import { Spinner } from "~/components/atoms/Spinner.tsx";

export const Image: FC<Props> = ({ url, alt }) => {
  const [preload, setPreload] = useState<boolean>(false);

  return (
    <>
      <img
        src={`C:/Users/user/Documents/wk/sekareco/sekareco_assets${url}`}
        className={`rounded lg:rounded-l object-fill h-full w-full ${preload ? "" : "hidden"}`}
        onError={(e) => (e.target as HTMLImageElement).src = "assets/goooooooooooooooo.png"}
        onLoad={() => setPreload(true)}
        alt={alt}
      />
      {!preload && (
        <div className="rounded-l object-fill w-full h-full flex items-center justify-center bg-slate-500">
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