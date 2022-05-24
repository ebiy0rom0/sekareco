import React from 'react'
import { Head } from 'aleph/react'
import { MyRecord } from '../components/myRecord.tsx'
import { MusicFilter } from '../components/musicFilter.tsx'
import { useMusic } from '../hooks/useMusic.tsx'
import { useMusicFilter } from '../hooks/useMusicFilter.tsx'
import { useRecord } from '../hooks/useRecord.tsx'

const Records: React.FunctionComponent = () => {
  const {
    levelUpper,
    levelLower,
  } = useMusic()

  const {
    difficulty,
    lowerFilter,
    upperFilter,
    changeDifficulty,
    changeLowerFilter,
    changeUpperFilter,
    getFilteredMusicList
  } = useMusicFilter()

  const { getMusicRecord } = useRecord(1)

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
      </div>
      { getFilteredMusicList().map(m => (
        <MyRecord
          key={m.id.toString()}
          title={ m.title }
          url={ m.url }
          result={ getMusicRecord(m.id) }
          level={ m.level }
        />
      )) }
    </div>
  )
}

export default Records