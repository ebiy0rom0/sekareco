import { getApiHandler } from "../handler/apiHandler.ts"

export const personRepository = {
  // when successfully sign in, returns access token
  login: async (loginID: string, password: string) => {
    const json = await getApiHandler()
        .post("signin", {
          json: {
            login_id: loginID,
            password: password
          }
        })
        .json<string>()
        .catch<string>(_ => "")

    return json
  },

  // when successfully regist, returns status 201 and not returns response body
  registPerson: async (loginID: string, name: string, password: string) => {
    await getApiHandler()
        .post("signup", {
          json: {
            login_id: loginID,
            password: password,
            person_name: name
          }
        })
        .json()
        .catch()
  },

  // when successfully modify, returns status 201 and not returns response body
  modifyPersonStatus: async (personID: number, name?: string, password?: string) => {
    await getApiHandler()
        .put(`persons/${personID}`, {
          json: {
            person_name: name,
            password: password
          }
        })
        .json()
        .catch()
  }
}