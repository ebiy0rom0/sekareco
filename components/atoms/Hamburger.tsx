import React, { useState, useEffect, useRef } from "react";

export const Hamburger = (props: Props) => {
  const [view, setView] = useState(false);
  const [childHeight, setChildHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const height = rect.height
    setChildHeight(height)
  }, [props.children])

  return (
    <div
      className={`relative overflow-hidden rounded-lg duration-500 transition-all ease-in-out grid bg-pink-100/40 shadow-md ${
        view ? `w-full p-8` : `${props.width} ${props.height}`
      }`}
      style={ {height: view ? `${childHeight + (16*4)}px` : ``} }
    >
      {view
        ? (
          <Opener setter={() => setView(false)} height={props.height} width={props.width}>
            <ChildRef ref={ref}>{props.children}</ChildRef>
          </Opener>
        )
        : <Closer setter={() => setView(true)} height={props.height} width={props.width} />}
    </div>
  );
};

const ChildRef = React.forwardRef((props: { children: React.ReactNode }, ref: React.ForwardedRef<HTMLDivElement>) => (
  <div className="h-full" ref={ref}>{props.children}</div>
))

const Closer = (props: {
  setter: () => void,
  height: height,
  width: width
}) => (
  <button type="button" className={`justify-self-end ${props.height} ${props.width} p-3`} onClick={props.setter}>
    <img src="assets/menu.svg" className="transition-none"></img>
  </button>
);

const Opener = (props: {
  children: React.ReactNode;
  setter: () => void,
  height: height,
  width: width
}) => (
  <div className="w-full grid">
    <button
      type="button"
      className={`absolute -mt-6 -mr-6 p-3 rounded ${props.height} ${props.width} bg-transparent justify-self-end`}
      onClick={props.setter}
    >
      <img src="assets/close.svg"></img>
    </button>
    <div className="absolute opacity-100 transition-opacity delay-750">
      {props.children}
    </div>
  </div>
);

type Props = {
  children: React.ReactNode;
  width: width;
  height: height;
};

type widthPrefix = "w-"
type heightPrefix = "h-"
type allowSize = 8 | 12 | 16 | 20 | 24

type width = `${widthPrefix}${allowSize}`
type height = `${heightPrefix}${allowSize}`