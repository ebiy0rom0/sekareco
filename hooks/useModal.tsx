import React, { useState, useEffect } from "react"

export const useModal = () => {
  const [ open, setOpen ] = useState(false)

  const render = (children: React.ReactNode) => {
    if (typeof document === "undefined") return 0
    return (
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
          flex place-self-center z-10 p-7 bg-white shadow-lg w-fit h-fit
          rounded-lg
          ${ open ? "opacity-100" : "pointer-events-none opacity-0" }
          transition-opacity
          ease-in-out
          duration-300
        `}
      >
        { children }
      </div>
      <div
        className={`
          fixed inset-0 bg-indigo-900
          ${ open ? "opacity-60" : "pointer-events-none opacity-0" }
          transition-opacity
          ease-in-out
          duration-300
        `}
        onClick={ () => setOpen(!open) }
      />
    </div>
  )}
  return {
    render,
    open: () => setOpen(!open)
  }
}