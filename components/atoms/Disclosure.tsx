import React, { useState } from "react";

export const Disclosure = React.memo((props: { children: React.ReactNode[] }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" className="w-full" onClick={()=>setOpen(!open)}>{props.children[0]}</button>
      <div className={`overflow-hidden ${open ? "h-auto" : "h-0"}`}>
        {props.children[1]}
      </div>
    </>
  )
})