import { useState, useEffect } from "react"
import { apiFactory } from "../api/apiFactory.ts"
import { setAuth } from "../api/handler/apiHandler.ts"
import { useSessionStorage } from "../utils/useSessionStorage.ts"

export const useLogin = (reloadKey = 0) => {
  const key = "token"
  const [ token, setToken ] = useSessionStorage(key, "", reloadKey)
  const [ isLogin, setLogin ] = useState<boolean>(false)
console.log("use login")
  const tryLogin = async (loginId: string, password: string) => {
    const newToken = await apiFactory.get("person").login(loginId, password)
    if (newToken.length > 0) {
      setToken(newToken)
      setAuth(newToken)
      return true
    }

    return false
  }

  useEffect(() => {
    setLogin(token.length > 0)
  }, [token])

  if (isLogin) {
    console.log("set auth")
    setAuth(token)
  }
  return {
    token,
    tryLogin,
    isLogin
  }
}