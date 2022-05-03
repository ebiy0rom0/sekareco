import { Head } from "aleph/react"
import { MyRecord } from "../components/myRecord.tsx"
import { Filter } from "../components/filter.tsx"

// @debug
import { ClearStatus } from "../components/clear.tsx"
const _musicList = [
  { id: 1, title: '悪魔の踊り方', url: '/assets/logo.svg', level: [5, 12, 19, 26, 30] },
  { id: 2, title: 'RAD DOGS',  url: '/assets/logo.svg', level: [6, 12, 18, 26, 30] },
  { id: 3, title: 'Flyer!',    url: '/assets/logo.svg', level: [9, 12, 18, 24, 29] }
]

const [n, c, f, a] = Object.values(ClearStatus)
const _myRecordList: {[n: number]: typeof ClearStatus[keyof typeof ClearStatus][]} = {
  1: [a,a,a,a,c],
  2: [a,a,f,f,c],
  3: [n,n,f,f,c]
}

export default () => (
  <div className="page todos-app">
    <Head>
      <title>Todos App by Aleph.js</title>
    </Head>
    <h1>
      <span>Player Results</span>
    </h1>
    <div className="filter">
      <Filter />
    </div>
    { _musicList.map(m => (
        <MyRecord
          key={m.id.toString()}
          title={ m.title }
          url={ m.url }
          result={ _myRecordList[m.id] }
          level={ m.level }
        />
      ))}
  </div>
)
