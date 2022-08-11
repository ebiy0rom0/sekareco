import { apiFactory } from "../api/apiFactory.ts"

// persistence
let token: string

export const useLogin = () => {
  const tryLogin = async (loginId: string, password: string) => {
    token = await apiFactory.get("person").login(loginId, password)
  }

  const isLogin = () => token.length > 0

  return {
    tryLogin,
    isLogin
  }
}