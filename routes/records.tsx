import React from "react"
import { redirect } from "aleph/framework/core/redirect.ts"
import { DifficultyList, DifficultyValues } from "./../hooks/useMusic.ts"
import { MyRecord } from "../components/MyRecord.tsx"
import { MusicFilter } from "../components/MusicFilter.tsx"
import { RecordFilter } from "../components/RecordFilter.tsx"
import { useMusic } from "../hooks/useMusic.ts"
import { useRecord } from "../hooks/useRecord.ts"
import { useLogin } from "../hooks/useLogin.ts"
import { useMusicFilter } from "../hooks/useMusicFilter.ts"
import { useRecordFilter } from "../hooks/useRecordFilter.ts"

const Records: React.FC = () => {
  const { isLogin } = useLogin()

  if (!isLogin()) {
    alert("session timeout")
    redirect("/", true)
  }

  const {
    levelUpper,
    levelLower,
    musicList,
  } = useMusic()

  const {
    getMusicRecord,
    increment,
    decrement
  } = useRecord(1)
  const {
    difficulty,
    lowerFilter,
    upperFilter,
    changeDifficulty,
    changeLowerFilter,
    changeUpperFilter,
    getFilteredMusicList
  } = useMusicFilter(musicList(), levelLower, levelUpper)
  const {
    whiteList: recordDifficulty,
    changeWhiteList: changeRecordDifficulty,
    isFiltered,
  } = useRecordFilter(DifficultyList)

  return (
    <div className="list flex flex-col w-3/4">
      <h2 className="list__head">
        <span>Player Records</span>
      </h2>
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
      <div className="list__items mt-4">
        { getFilteredMusicList().map(m => (
          <MyRecord
            key={m.id.toString()}
            title={ m.title }
            url={ m.url }
            result={ getMusicRecord(m.id) }
            filter={ recordDifficulty() }
            level={ m.level }
            increment={ (status: DifficultyValues) => increment(m.id, status) }
            decrement={ (status: DifficultyValues) => decrement(m.id, status) }
          />
        )) }
      </div>
    </div>
  )
}

export default Records