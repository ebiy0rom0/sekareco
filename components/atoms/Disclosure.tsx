import React, { useState } from "react";
import Icon, { ICON_MINUS, ICON_PLUS } from "~/components/atoms/Icon.tsx";

export const Disclosure = React.memo(
  (props: { children: React.ReactNode[] }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <a
          type="button"
          className="w-full"
          onClick={() => setOpen(!open)}
        >
          <div className="flex justify-between">
            {props.children[0]}
            {open ? (<Icon icon={ICON_MINUS} />) : (<Icon icon={ICON_PLUS} />)}
          </div>
        </a>
        <div className={`overflow-hidden ${open ? "h-auto" : "h-0"}`}>
          {props.children[1]}
        </div>
      </>
    );
  },
);
