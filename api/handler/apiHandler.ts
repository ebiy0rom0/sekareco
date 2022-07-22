import ky from "https://cdn.skypack.dev/ky?dts"

// use with not authentication api
const apiHandler = ky.create({
  prefixUrl: "http://localhost:8000/",
  hooks: {
    beforeRequest: [
      request => {
        console.log(request.url)
        request.headers.set("Content-Type", "application/json")
      }
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

export const getApiHandler = () => authedHandler ?? apiHandler