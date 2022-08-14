import { useCallback } from "react"
import { apiFactory } from "../api/apiFactory.ts"
import { setAuth } from "../api/handler/apiHandler.ts"
import { useSessionStorage } from "../utils/useSessionStorage.ts"

export const useLogin = () => {
  const key = "token"
  const [ token, setToken ] = useSessionStorage(key, "")

  const tryLogin = async (loginId: string, password: string) => {
    const newToken = await apiFactory.get("person").login(loginId, password)
    if (newToken.length > 0) {
      setToken(newToken)
      setAuth(newToken)
      return true
    }

    return false
  }

  // login check
  const isLogin = () => token().length > 0

  if (isLogin()) {
    console.log("set auth")
    setAuth(token())
  }
  return {
    token,
    tryLogin,
    isLogin
  }
}