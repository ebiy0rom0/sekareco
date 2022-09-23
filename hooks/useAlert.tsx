import { useState } from "react"

export const useAlert = (type: alertType = AlertBgType.ALERT_RED) => {
  const [ message, setMessage ] = useState<string>("")

  const renderAlert = () => (message.length > 0) ? (
    <div className={ "box-border w-full py-5 px-5 rounded-lg text-slate-100 font-bold " + Alert[type] }>
      { message }
    </div>
  ) : <></>

  return {
    setMessage,
    renderAlert
  }
}

const AlertBgType = {
  ALERT_RED: 1,
  ALERT_BLUE: 2,
  ALERT_GREEN: 3,
  ALERT_YELLOW: 4
} as const


export const Alert = {
  [AlertBgType.ALERT_RED]: "bg-red-400",
  [AlertBgType.ALERT_BLUE]: "bg-blue-400",
  [AlertBgType.ALERT_GREEN]: "bg-green-400",
  [AlertBgType.ALERT_YELLOW]: "bg-amber-400",
} as const

type alertType = typeof AlertBgType[keyof typeof AlertBgType]