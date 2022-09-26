import React, { useCallback, useState } from "react";

export const Tab = React.memo((props: Props) => {
  const [selectKey, setSelectKey] = useState<string>(props.tabs[0].key);
  const selectTab = useCallback(
    () => props.tabs.find((tab) => tab.key === selectKey),
    [selectKey],
  );

  return (
    <>
      <nav className="tab flex flex-row gap-x-5 pb-5 px-5 border-b-3">
        {props.tabs.map((tab) => (
          <div className="grow" key={tab.key}>
            <a
              className={[
                tab.key === selectKey ? "text-violet-500" : "text-slate-400",
                tab.key === selectKey
                  ? "hover:text-violet-400"
                  : "hover:text-slate-300",
                tab.key === selectKey && "border-b-2",
                tab.key === selectKey
                  ? "border-violet-500"
                  : "border-slate-400",
                "tab__title",
                "inline-block",
                "text-center",
                "text-2xl",
                "font-bold",
                "w-full",
                "py-2",
                "bg-slate-800",
              ].join(" ")}
              onClick={(_: React.MouseEvent<HTMLAnchorElement>) =>
                setSelectKey(tab.key)}
            >
              {tab.title}
            </a>
          </div>
        ))}
      </nav>
      <div className="tab__content grow mt-7 p-5">
        {selectTab()?.content}
      </div>
    </>
  );
});

type Props = {
  tabs: {
    title: string;
    key: string;
    content: React.ReactNode;
  }[];
};

// export const TabContent = React.memo(() => {
//   const ctx = useContext(t)
//   return (<></>)
// })

// const t = createContext({
//   selectKey: ''
// })
