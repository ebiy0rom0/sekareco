import React, { useState, useCallback } from "react"

export const Tab = React.memo((props: Props) => {
  const [ selectKey, setSelectKey ] = useState<string>(props.tabs[0].key)
  const selectTab = useCallback(
    () => props.tabs.find(tab => tab.key === selectKey)
  , [selectKey])

  return (
    <>
      { props.tabs.map(tab => (
        <div
          className="tab__title"
          onClick={ (_: React.MouseEvent<HTMLDivElement>) => setSelectKey(tab.key) }
        >
          { tab.title }
        </div>
      )) }
      <div className="tab__content">
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
