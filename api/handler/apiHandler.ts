import ky from "https://cdn.skypack.dev/ky?dts"

// use with not authentication api
const apiHandler = ky.create({
  prefixUrl: "http://localhost:8000/api/v1/",
  hooks: {
    beforeRequest: [
      request => request.headers.set("Content-Type", "application/json")
    ],
    afterResponse: [
      (_request, _options, response) => {
        console.log(response)

        switch (response.status) {
        case 503:
          console.log("code: 503")
          break
        case 404:
          console.log("code: 404")
          break
        }
      }
    ],
    beforeError: [
      error => {
        console.log(error)
        return error
      }
    ]
  }
})

// use with need an authentication api
let authedHandler: typeof apiHandler | undefined = undefined

// create a new handler with a Bearer token header
export const setAuth = (token: string) => {
  authedHandler = apiHandler.extend({
    hooks: {
      beforeRequest: [
        request => request.headers.set("Authorization", `Bearer ${token}`)
      ]
    }
  })
}

// revoke token and use unauthenticated handler
export const resetAuth = () => authedHandler = undefined

// priority is given to authenticated handlers
export const getApiHandler = () => authedHandler ?? apiHandler