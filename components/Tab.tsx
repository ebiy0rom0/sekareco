import React, { useState, useCallback } from "react"

export const Tab = React.memo((props: Props) => {
  const [ selectKey, setSelectKey ] = useState<string>(props.tabs[0].key)
  const selectTab = useCallback(
    () => props.tabs.find(tab => tab.key === selectKey)
  , [selectKey])

  return (
    <>
      <nav className="tab flex flex-row gap-x-5">
        { props.tabs.map(tab => (
          <div className="grow">
            <a
              className={
                (tab.key === selectKey ? "border-blue-600 text-blue-600 " : "") +
                "tab__title w-full py-3 inline-block border-b-4 bg-slate-800 text-slate-400 text-2xl text-center hover:text-slate-300"
              }
              onClick={ (_: React.MouseEvent<HTMLAnchorElement>) => setSelectKey(tab.key) }
            >
              { tab.title }
            </a>
          </div>
        )) }
      </nav>
      <div className="tab__content grow mt-5">
        { selectTab()?.content }
      </div>
    </>
  )
})

type Props = {
  tabs: {
    title: string,
    key: string
    content: React.ReactNode
  }[]
}

// export const TabContent = React.memo(() => {
//   const ctx = useContext(t)
//   return (<></>)
// })

// const t = createContext({
//   selectKey: ''
// })
