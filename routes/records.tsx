import React, { useState } from "react";
import { difficulty } from "~/types/index.ts";
import { Icon, ICON_FILTER, ICON_SORT } from "~/components/atoms/Icon.tsx";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Record } from "~/components/organisms/Record.tsx";
import { MusicFilter } from "~/components/organisms/MusicFilter.tsx";
import { RecordFilter } from "~/components/organisms/RecordFilter.tsx";
import { RecordEditor } from "~/components/organisms/RecordEditor.tsx";
import { useMusic } from "~/hooks/useMusic.ts";
import { useRecord } from "~/hooks/useRecord.ts";
import { useMusicFilter } from "~/hooks/useMusicFilter.ts";
import { useRecordFilter } from "~/hooks/useRecordFilter.ts";
import { useModal } from "~/hooks/useModal.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

const Records: React.FC = () => {
  const { levelUpper, levelLower, music } = useMusic();
  const { getRecord, rollNext, rollPrev } = useRecord(1);
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

  const { render: modal, open } = useModal();

  const editorOpen = (music: M_Music.Music) => {
    alert(music.musicID);
    open();
  };
  const [diff, setDiff] = useState(false);

  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <>
          <div
            className={`flex justify-between pb-4 pt-4 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <span className="text-3xl font-semibold tracking-widest first-letter:text-4xl">
              記録帳
            </span>
            <div className="flex items-end gap-x-8 mr-4">
              <div className="flex font-semibold">
                <Checkbox
                  id="diffToggle"
                  checked={diff}
                  handler={(_: string) => setDiff(!diff)}
                  value={"1"}
                >
                  -MAX
                </Checkbox>
              </div>
              <div className="flex font-semibold gap-x-1">
                sort <Icon icon={ICON_SORT} />
              </div>
              <div className="flex font-semibold lg:hidden">
                filter<Icon icon={ICON_FILTER} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-x-15 py-5">
              <form className="hidden lg:block">
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
                  handler={changeRecordDifficulty}
                  isChecked={isFiltered}
                />
              </form>
              <div className="w-full xl:col-span-4 place-self-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none gap-y-3 gap-x-5">
                {getFilteredMusic().map((m) => (
                  <a
                    type="button"
                    key={m.musicID.toString()}
                    onClick={() => editorOpen(m)}
                  >
                    <Record
                      title={m.musicName}
                      jacketUrl={m.jacketUrl}
                      diff={diff}
                      status={getRecord(m.musicID).status}
                      score={getRecord(m.musicID).score}
                      filter={recordDifficulty()}
                      level={m.level}
                      notes={m.notes}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {modal(<RecordEditor />)}
        </>
      )}
    </ThemeConsumer>
  );
};

export default Records;
