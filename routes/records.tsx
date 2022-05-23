import React from 'react'
import { Head } from 'aleph/react'
import { MyRecord } from '../components/myRecord.tsx'
import { MusicFilter } from '../components/musicFilter.tsx'
import { useMusic } from '../hooks/useMusic.tsx'
import { useMusicFilter } from '../hooks/useMusicFilter.tsx'
import { useRecord } from '../hooks/useRecord.tsx'

export default () => {
  const {
    levelUpper,
    levelLower,
  } = useMusic()

  const {
    changeTargetDifficulty,
    targetDifficulty,
    lowerFilter,
    upperFilter,
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
          levelLower={ levelLower(targetDifficulty()) }
          levelUpper={ levelUpper(targetDifficulty()) }
          target={{
            value:  targetDifficulty(),
            setter: changeTargetDifficulty
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
      { getFilteredMusicList(targetDifficulty()).map(m => (
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