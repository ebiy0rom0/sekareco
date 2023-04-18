import React, { useState } from "react";
import { useTheme } from "~/hooks/useTheme.tsx";

export const useModal = (callback: () => void) => {
  const { dark } = useTheme();
  const [open, setOpen] = useState(false);

  const closeCallback = () => {
    callback();
    setOpen(false);
  };

  const render = (children: React.ReactNode) => (
    <div
      className={`
        items-center fixed grid inset-0 my-auto max-h-[80vh] overflow-auto
        ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        transition-opacity
        ease-in-out
        duration-300
      `}
    >
      <div
        className={`
          flex place-self-center p-7 mx-15 z-10
          w-fit h-fit
          shadow-lg rounded-lg
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
          ${dark ? "bg-slate-800" : "bg-slate-100"}
          transition-opacity
          ease-in-out
          duration-300
        `}
      >
        {children}
      </div>
      <div
        className={`
          fixed inset-0
          ${open ? "opacity-40" : "pointer-events-none opacity-0"}
          ${dark ? "bg-slate-200" : "bg-slate-700"}
          transition-opacity
          ease-in-out
          duration-300
        `}
        onClick={() => closeCallback()}
      />
    </div>
  );

  return {
    render,
    open: () => setOpen(true),
  };
};
