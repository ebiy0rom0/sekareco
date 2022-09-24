import React, { useState } from "react"
import { ThemeCtx } from "~/hooks/useTheme.tsx"

export const useModal = () => {
  const [ open, setOpen ] = useState(false)

  const render = (children: React.ReactNode) => (
    <ThemeCtx.Consumer>
      { ({ darkMode }) => (
        <div
          className={`
            items-center fixed grid inset-0
            ${ open ? "opacity-100" : "pointer-events-none opacity-0" }
            transition-opacity
            ease-in-out
            duration-300
          `}
        >
          <div
            className={`
              flex place-self-center p-7 z-10
              w-fit h-fit
              shadow-lg rounded-lg
              ${ open ? "opacity-100" : "pointer-events-none opacity-0" }
              ${ darkMode ? "bg-slate-800" : "bg-slate-100" }
              transition-opacity
              ease-in-out
              duration-300
            `}
          >
            { children }
          </div>
          <div
            className={`
              fixed inset-0
              ${ open ? "opacity-40" : "pointer-events-none opacity-0" }
              ${ darkMode ? "bg-slate-200" : "bg-slate-700" }
              transition-opacity
              ease-in-out
              duration-300
            `}
            onClick={ () => setOpen(!open) }
          />
        </div>
      ) }
    </ThemeCtx.Consumer>
  )

  return {
    render,
    open: () => setOpen(!open)
  }
}