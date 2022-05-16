import { apiHandler } from '../handler/apiHandler.ts'

export const personRepository = {
  login: async (personId: number, password: string) => {
    const json = await apiHandler.get(`person/${personId}/`).json()
    console.log(json)
  },
  registPerson: async (loginId: string, password: string, name: string) => {
    const json = await apiHandler.post('person/', {
      json: {
        login_id: loginId,
        password: password,
        person_name: name
      }
    }).json()
    console.log(json)
  },
  modifyPersonStatus: async (personId: number, name?: string, password?: string) => {
    const json = await apiHandler.put(`person/${personId}/`, {
      json: {
        person_name: name,
        password: password
      }
    }).json()
    console.log(json)
  }
}