import { musicRepository } from "./repository/musicRepository.ts"
import { personRepository } from "./repository/personRepository.ts"
import { recordRepository } from "./repository/recordRepository.ts"

type Repositories = {
  music:  typeof musicRepository,
  person: typeof personRepository,
  record: typeof recordRepository
}

const repo: Repositories = {
  music:  musicRepository,
  person: personRepository,
  record: recordRepository,
}

export const apiFactory = {
  get: <T extends keyof Repositories>(target: T): Repositories[T] => repo[target]
}