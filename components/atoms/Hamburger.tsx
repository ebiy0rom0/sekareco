import React, { useState } from "react";

export const Hamburger = (props: Props) => {
  const [view, setView] = useState(false);
  return (
    <div
      className={`rounded-lg duration-500 transition-all ease-out grid bg-pink-100/40 shadow-md ${
        view ? "w-full h-auto" : `w-${props.size} h-${props.size}`
      }`}
    >
      {view
        ? (
          <Opener setter={() => setView(false)}>
            {props.children}
          </Opener>
        )
        : <Closer setter={() => setView(true)} />}
    </div>
  );
};

const Closer = (props: { setter: () => void }) => (
  <div className="justify-self-end w-full h-full" onClick={props.setter} />
);

const Opener = (props: { children: React.ReactNode; setter: () => void }) => (
  <div className="w-full p-8 grid">
    <button
      className="absolute -mt-4 -mr-4 rounded h-8 w-8 bg-transparent justify-self-end"
      onClick={props.setter}
    >
      x
    </button>
    {props.children}
  </div>
);

type Props = {
  children: React.ReactNode;
  size: number;
};
