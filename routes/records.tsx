import { Head } from 'aleph/react'
import { MyRecord } from '../components/myRecord.tsx'
import { MusicFilter } from '../components/musicFilter.tsx'
import { RecordFilter } from '../components/recordFilter.tsx'
import { useMusic } from '../hooks/useMusic.tsx'
import { useRecord } from '../hooks/useRecord.tsx'
import { useMusicFilter } from '../hooks/useMusicFilter.tsx'
import { useRecordFilter } from '../hooks/useRecordFilter.tsx'

const Records: React.FunctionComponent = () => {
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
    difficulty: recordDifficulty,
    changeDifficulty: changeRecordDifficulty,
    isFiltered,
  } = useRecordFilter()

  return (
    <div className='page todos-app'>
      <Head>
        <title>Todos App by Aleph.js</title>
      </Head>
      <h1>
        <span>Player Results</span>
      </h1>
      <div className='filter'>
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
  )
}

export default Records