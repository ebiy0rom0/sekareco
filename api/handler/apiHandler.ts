import { KyInstance } from "https://esm.sh/v91/ky@0.31.1/distribution/types/ky.d.ts";
import { redirect } from "aleph/runtime/core/redirect.ts";
import ky from "ky";

const defaultTTL = 3600
const timestamp = () => Math.floor(Date.now() / 1000)

type CacheData = {
  expiredIn: number;
  data: unknown;
}
class ApiClient {
  // api client instance by ky
  private client: KyInstance
  // session token that needs by each api
  private token = ''
  // data cache
  private dataMap: Map<string, CacheData> = new Map()

  constructor() {
console.log("api client new constructor")
    this.client = ky.create({
      prefixUrl: "http://localhost:8000/api/v1/",
      hooks: {
        beforeRequest: [
          (request) => {
            request.headers.set("Content-Type", "application/json");
            if (this.token.length > 0) {
              request.headers.set("Authorization", `Bearer ${this.token}`)
            }
          },
        ],
        afterResponse: [
          (_request, _options, response) => {
            console.log(response);

            switch (response.status) {
              case 503:
                console.log("code: 503");
                break;
              case 404:
                console.log("code: 404");
                redirect("_404/")
                break;
              case 403:
                // discard currently held tokens
                this.revokeAuth()
                // redirect to top page
                redirect("/");
                break;
            }
          },
        ],
        beforeError: [
          (error) => {
            console.log(error);
            return error;
          },
        ],
      },
    });
  }

  private setCache = <T>(cacheKey: string, data: T) => this.dataMap.set(cacheKey, {expiredIn: timestamp() + defaultTTL, data: data})

  get = async <T>(uri: string) => {
    if (this.dataMap.has(uri)) {
      const cache = this.dataMap.get(uri)
console.log(`cache hit: ${uri}`)
    return cache?.data as T | undefined
    }

    const data = await this.client.get(uri).json<T>()
    return data
  }
  post = <T extends {[s: string]: unknown}>(uri: string, params: T) => this.client.post(uri, {json: {...params}})
  put =  <T extends {[s: string]: unknown}>(uri: string, params: T) => this.client.put(uri, {json: {...params}})

  setAuth = (token: string) => this.token = token
  revokeAuth = () => this.token = ''
}

export const apiClient = new ApiClient()

export const setAuth = (token: string) => apiClient.setAuth(token)
export const revokeAuth = () => apiClient.revokeAuth()