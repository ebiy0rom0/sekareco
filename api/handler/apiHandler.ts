import ky from "https://cdn.skypack.dev/ky?dts"

const api = ky.create({
  prefixUrl: "http://localhost:8000/"
})

export const apiHandler = api.extend({
  hooks: {
    beforeRequest: [
      request => {
        request.headers.set("Content-Type", "application/json");
      }
    ]
  }
})

