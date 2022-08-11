import { getApiHandler } from "../handler/apiHandler.ts"

export const personRepository = {
  login: async (loginID: string, password: string) => {
    const json = await getApiHandler().post("signin", {
      json: {
        login_id: loginID,
        password: password
      }
    }).json<string>().catch(e => console.log(e))

    console.log(json)
    return json
  },

  registPerson: async (loginID: string, name: string, password: string) => {
    const json = await getApiHandler().post("signup", {
      json: {
        login_id: loginID,
        password: password,
        person_name: name
      }
    }).json<string>().catch(e => console.log(e))

    console.log(json)
    return json
  },

  modifyPersonStatus: async (personID: number, name?: string, password?: string) => {
    const json = await getApiHandler().put(`persons/${personID}/`, {
      json: {
        person_name: name,
        password: password
      }
    }).json<string>().catch(e => console.log(e))

    console.log(json)
    return json
  }
}