import React, { useEffect, useRef, useState } from "react";

export const Hamburger = (props: Props) => {
  const [view, setView] = useState(false);
  const [childHeight, setChildHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const height = rect.height;
    setChildHeight(height);
  }, [view]);

  return (
    <div
      className={`relative overflow-hidden rounded-lg duration-500 transition-all ease-in-out grid bg-pink-100/40 shadow-md ${
        view ? `w-full p-8` : `${props.width} ${props.height}`
      }`}
      style={{ height: view ? `${childHeight + (16 * 4)}px` : `` }}
    >
      {view
        ? (
          <Opener ref={ref} setter={() => setView(false)} height={props.height} width={props.width}>
            {props.children}
            {childHeight}
          </Opener>
        )
        : <Closer setter={() => setView(true)} height={props.height} width={props.width} />}
    </div>
  );
};

const Closer = (props: {
  setter: () => void;
  height: height;
  width: width;
}) => (
  <button
    type="button"
    className={`justify-self-end ${props.height} ${props.width} p-3`}
    onClick={props.setter}
  >
    <img src="assets/menu.svg" className="transition-none"></img>
  </button>
);

const Opener = React.forwardRef((props: {
  children: React.ReactNode;
  setter: () => void;
  height: height;
  width: width;
}, ref: React.ForwardedRef<HTMLDivElement>) => (
  <div className="w-full grid">
    <div
      className={`absolute -mt-6 -mr-6 p-3 rounded ${props.height} ${props.width} bg-transparent justify-self-end`}
      onClick={props.setter}
    >
      <img src="assets/close.svg"></img>
    </div>
    <div ref={ref} className="absolute opacity-100 transition-opacity delay-750">
      {props.children}
    </div>
  </div>
));

type Props = {
  children: React.ReactNode;
  width: width;
  height: height;
};

type widthPrefix = "w-";
type heightPrefix = "h-";
type allowSize = 8 | 12 | 16 | 20 | 24;

type width = `${widthPrefix}${allowSize}`;
type height = `${heightPrefix}${allowSize}`;
