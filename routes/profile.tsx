import React from "react"
import { difficulty, Difficulty } from "~/types/index.ts"
import { MyRecord } from "~/components/molecules/MyRecord.tsx"
import { MusicFilter } from "~/components/organisms/MusicFilter.tsx"
import { RecordFilter } from "~/components/organisms/RecordFilter.tsx"
import { useMusic } from "~/hooks/useMusic.ts"
import { useRecord } from "~/hooks/useRecord.ts"
import { useMusicFilter } from "~/hooks/useMusicFilter.ts"
import { useRecordFilter } from "~/hooks/useRecordFilter.ts"

const Records: React.FC = () => {
  return (
    <div className="list flex flex-col w-3/4">
      <h2 className="list__head">
        <span>Profile</span>
      </h2>
      <div className="list__filter">
      </div>
      <div className="list__items mt-4">
      </div>
    </div>
  )
}

export default Records