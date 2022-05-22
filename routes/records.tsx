import React from 'react'
import { Head } from 'aleph/react'
import { MyRecord } from '../components/myRecord.tsx'
import { Filter } from '../components/filter.tsx'
import { useMusic } from '../hooks/useMusic.tsx'
import { useMusicFilter } from '../hooks/useMusicFilter.tsx'
import { useRecord } from '../hooks/useRecord.tsx'

export default () => {
  const {
    levelUpper,
    levelLower,
  } = useMusic()
  const {
    upperFilter,
    changeUpperFilter,
    lowerFilter,
    changeLowerFilter,
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
        <Filter
          levelLower={ levelLower() }
          levelUpper={ levelUpper() }
          value={ lowerFilter() }
          setter={ changeLowerFilter }
        />
        <Filter
          levelLower={ levelLower() }
          levelUpper={ levelUpper() }
          value={ upperFilter() }
          setter={ changeUpperFilter }
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
      ))}
    </div>
  )
}