import React from "react";
import { Difficulty, difficulty } from "~/types/index.ts";
import { MyRecord } from "~/components/molecules/MyRecord.tsx";
import { MusicFilter } from "~/components/organisms/MusicFilter.tsx";
import { RecordFilter } from "~/components/organisms/RecordFilter.tsx";
import { useMusic } from "~/hooks/useMusic.ts";
import { useRecord } from "~/hooks/useRecord.ts";
import { useMusicFilter } from "~/hooks/useMusicFilter.ts";
import { useRecordFilter } from "~/hooks/useRecordFilter.ts";

const Records: React.FC = () => {
  const {
    levelUpper,
    levelLower,
    music,
  } = useMusic();

  const {
    getMusicRecord,
    increment,
    decrement,
  } = useRecord(1);
  const {
    filterDifficulty,
    lowerFilter,
    upperFilter,
    changeDifficulty,
    changeLowerFilter,
    changeUpperFilter,
    getFilteredMusic,
  } = useMusicFilter(music(), levelLower, levelUpper);
  const {
    whiteList: recordDifficulty,
    changeWhiteList: changeRecordDifficulty,
    isFiltered,
  } = useRecordFilter(difficulty);

  return (
    <div className="list flex flex-col">
      <h2 className="list__head">
        <span>Player Records</span>
      </h2>
      <div className="list__filter">
        <MusicFilter
          levelLower={levelLower(filterDifficulty())}
          levelUpper={levelUpper(filterDifficulty())}
          target={{
            value: filterDifficulty(),
            setter: changeDifficulty,
          }}
          lower={{
            value: lowerFilter(),
            setter: changeLowerFilter,
          }}
          upper={{
            value: upperFilter(),
            setter: changeUpperFilter,
          }}
        />
        <RecordFilter
          setter={changeRecordDifficulty}
          isChecked={isFiltered}
        />
      </div>
      <div className="list__items grid gap-y-3">
        {getFilteredMusic().map((m) => (
          <MyRecord
            key={m.musicID.toString()}
            title={m.musicName}
            url={m.jacketUrl}
            result={getMusicRecord(m.musicID)}
            filter={recordDifficulty()}
            level={m.level}
            increment={(status: Difficulty) => increment(m.musicID, status)}
            decrement={(status: Difficulty) => decrement(m.musicID, status)}
          />
        ))}
      </div>
    </div>
  );
};

export default Records;
