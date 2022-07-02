import ky from "https://cdn.skypack.dev/ky?dts"

export const apiHandler = ky.create({
  prefixUrl: "http://localhost:8000/",
  hooks: {
    beforeRequest: [
      request => {
        request.headers.set("Content-Type", "application/json")
      }
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === 503) {
          const body = await response.json() as {'error': string}
          console.log(body.error)
        }
      }
    ]
  }
})

export let authedHandler: typeof apiHandler | undefined = undefined

export const setAuth = (token: string) => {
  authedHandler = apiHandler.extend({
    hooks: {
      beforeRequest: [
        request => {
          request.headers.set("Authorizetion", `Bearer ${token}`)
        }
      ]
    }
  })
}

export const resetAuth = () => authedHandler = undefined