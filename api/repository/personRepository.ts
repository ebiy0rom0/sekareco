import { apiClient } from "~/api/handler/apiHandler.ts";

export const personRepository = {
  login: async (loginID: string, password: string) => {
    // when successfully sign in, returns access token
    const json = await apiClient
      .post("signin", {
        login_id: loginID,
        password: password,
      })
      .json<string>()
      .catch<string>((_) => "");

    return json;
  },

  registPerson: async (loginID: string, name: string, password: string) => {
    // when successfully regist, returns status 201 and not returns response body
    await apiClient
      .post("signup", {
        login_id: loginID,
        password: password,
        person_name: name,
      })
      .json()
      .catch();
  },

  modifyPersonStatus: async (
    personID: number,
    name?: string,
    password?: string,
  ) => {
    // when successfully modify, returns status 201 and not returns response body
    await apiClient
      .put(`persons/${personID}`, {
        person_name: name,
        password: password,
      })
      .json()
      .catch();
  },
};
