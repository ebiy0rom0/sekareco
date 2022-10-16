import React from "react";

export const List = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLDivElement>) => (
  <div
    ref={ref}
    className={`translate-opacity grid py-1 items-center border-2 rounded-lg bg-white ${
      props.show ? "opacity-0 opacity-100" : "hidden"
    }`}
  >
    {props.children.map((child, i) => (
      <div key={i.toString()} className="px-4 py-1 hover:bg-violet-600 hover:text-slate-100">
        {child}
      </div>
    ))}
  </div>
));

type Props = {
  children: string[] | React.ReactNode[];
  show: boolean;
};
