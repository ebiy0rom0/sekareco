import { getApiHandler } from "~/api/handler/apiHandler.ts";

export const personRepository = {
  login: async (loginID: string, password: string) => {
    // when successfully sign in, returns access token
    const json = await getApiHandler()
      .post("signin", {
        json: {
          login_id: loginID,
          password: password,
        },
      })
      .json<string>()
      .catch<string>((_) => "");

    return json;
  },

  registPerson: async (loginID: string, name: string, password: string) => {
    // when successfully regist, returns status 201 and not returns response body
    await getApiHandler()
      .post("signup", {
        json: {
          login_id: loginID,
          password: password,
          person_name: name,
        },
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
    await getApiHandler()
      .put(`persons/${personID}`, {
        json: {
          person_name: name,
          password: password,
        },
      })
      .json()
      .catch();
  },
};
