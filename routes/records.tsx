import { DifficultyList } from "./../hooks/useMusic.tsx"
import { Head } from "aleph/react"
import { MyRecord } from "../components/myRecord.tsx"
import { MusicFilter } from "../components/musicFilter.tsx"
import { RecordFilter } from "../components/recordFilter.tsx"
import { useMusic } from "../hooks/useMusic.tsx"
import { useRecord } from "../hooks/useRecord.tsx"
import { useMusicFilter } from "../hooks/useMusicFilter.tsx"
import { useRecordFilter } from "../hooks/useRecordFilter.tsx"

const Records: React.FC = () => {
  const {
    levelUpper,
    levelLower,
    musicList,
  } = useMusic()

  const { getMusicRecord } = useRecord(1)
  const {
    difficulty,
    lowerFilter,
    upperFilter,
    changeDifficulty,
    changeLowerFilter,
    changeUpperFilter,
    getFilteredMusicList
  } = useMusicFilter(musicList())
  const {
    whiteList: recordDifficulty,
    changeWhiteList: changeRecordDifficulty,
    isFiltered,
  } = useRecordFilter(DifficultyList)

  return (
    <>
      <Head>
        <title>Todos App by Aleph.js</title>
      </Head>
      <div className="list flex-col">
        <h1 className="list__head">
          <span>Player Results</span>
        </h1>
        <div className="list__filter">
          <MusicFilter
            levelLower={ levelLower(difficulty()) }
            levelUpper={ levelUpper(difficulty()) }
            target={{
              value:  difficulty(),
              setter: changeDifficulty
            }}
            lower={{
              value:  lowerFilter(),
              setter: changeLowerFilter
            }}
            upper={{
              value: upperFilter(),
              setter: changeUpperFilter
            }}
          />
          <RecordFilter
            setter={ changeRecordDifficulty }
            isChecked={ isFiltered }
          />
        </div>
        <div className="list__items mt-10">
          { getFilteredMusicList().map(m => (
            <MyRecord
              key={m.id.toString()}
              title={ m.title }
              url={ m.url }
              result={ getMusicRecord(m.id) }
              filter={ recordDifficulty() }
              level={ m.level }
            />
          )) }
        </div>
      </div>
    </>
  )
}

export default Records