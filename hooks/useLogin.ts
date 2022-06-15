import { apiFactory } from "../api/apiFactory.ts"

export const useLogin = () => {
  const login = (personId: number, password: string) => {
    const token = apiFactory.get("person").login(personId, password)
    console.log(token)
  }

  const isLogin = () => false

  return {
    login,
    isLogin
  }
}