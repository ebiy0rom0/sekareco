import { useEffect, useState } from "react";
import { apiFactory } from "~/api/apiFactory.ts";
import { setAuth } from "~/api/handler/apiHandler.ts";
import { useSessionStorage } from "~/utils/useSessionStorage.ts";

export const useLogin = (reloadKey = 0) => {
  const [isLogin, setLogin] = useState<boolean>(false);

  const tryLogin = async (loginId: string, password: string) => {
    const token = await apiFactory.get("person").login(loginId, password);
    if (token.length > 0) {
      setAuth(token);
      return true;
    }

    return false;
  };

  // useEffect(() => {
  //   setLogin(token.length > 0);
  // }, [token]);

  return {
    tryLogin,
    isLogin,
  };
};
