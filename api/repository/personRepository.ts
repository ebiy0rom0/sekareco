import { apiHandler } from "../handler/apiHandler.ts"

export const personRepository = {
  login: async (loginID: string, password: string) => {
    const json = await apiHandler.post("signin", {
      json: {
        person_id: loginID,
        password: password
      }
    }).json<string>()
    console.log(json)

    return json
  },
  registPerson: async (loginID: string, name: string, password: string) => {
    const json = await apiHandler.post("signup", {
      json: {
        login_id: loginID,
        password: password,
        person_name: name
      }
    }).catch(e => console.log(e))

    console.log(json)
    return json
  },
  modifyPersonStatus: async (personID: number, name?: string, password?: string) => {
    const json = await apiHandler.put(`person/${personID}/`, {
      json: {
        person_name: name,
        password: password
      }
    }).json<string>()
    console.log(json)

    return json
  }
}