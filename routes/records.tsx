import React, { useRef, useState } from "react";
import { DIFFICULTY, StatusValues } from "~/types/index.ts";
import { apiFactory } from "~/api/apiFactory.ts";
import { Icon, ICON_FILTER } from "~/components/atoms/Icon.tsx";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Record } from "~/components/organisms/Record.tsx";
import { List } from "~/components/atoms/List.tsx";
import { MusicFilter } from "~/components/organisms/MusicFilter.tsx";
import { RecordFilter } from "~/components/organisms/RecordFilter.tsx";
import { RecordEditor } from "~/components/organisms/RecordEditor.tsx";
import { SortButton } from "~/components/organisms/SortButton.tsx";
import { useMusic } from "~/hooks/useMusic.ts";
import { useRecord } from "~/hooks/useRecord.ts";
import { useMusicFilter } from "~/hooks/useMusicFilter.ts";
import { useRecordFilter } from "~/hooks/useRecordFilter.ts";
import { useRecordEditor } from "~/hooks/useRecordEditor.ts";
import { useMusicSort } from "~/hooks/useMusicSort.ts";
import { useModal } from "~/hooks/useModal.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { useOnClickOutside } from "~/utils/useOnClickOutside.ts";
import { useObjectCompare } from "~/utils/useObjectCompare.ts";

const Records: React.FC = () => {
  const [music, levelRange] = useMusic();
  const { getRecord, setRecord } = useRecord(1);

  // music filtering
  const [filter, filterDispatch, filteredMusic] = useMusicFilter(music, levelRange);

  // sort
  const {
    sortedMusic,
  } = useMusicSort(filteredMusic);

  // record filtering
  const {
    whiteList: recordDifficulty,
    changeWhiteList: changeRecordDifficulty,
    isFiltered,
  } = useRecordFilter(DIFFICULTY);

  // score display in difference mode
  const [diffMode, setDiffMode] = useState(false);

  // sort list display flag
  const [showSort, setShowSort] = useState(false);

  // reservation to hide when click or tap outside the list
  const sortListRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sortListRef, () => setShowSort(false));

  // filter list display flag when screen less than or equal to `sm`
  const [showFilter, setShowFilter] = useState(false);

  // reservation to hide when click or tap outside the list
  const filterListRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(filterListRef, () => setShowFilter(false));

  // editor
  const [editMusic, setEditMusic] = useState<Music>({
    musicID: 0,
    musicName: "",
    artistID: 0,
    jacketUrl: "",
    level: [0, 0, 0, 0, 0],
    notes: [0, 0, 0, 0, 0],
  });
  const [editRecord, dispatch] = useRecordEditor();
  const { difference } = useObjectCompare(editRecord, getRecord(editMusic.musicID));

  // editor modal
  const { render: modal, open } = useModal(() => {
    if (!difference()) return;

    apiFactory.get("record")
      .registRecord(editMusic.musicID, editRecord)
      .then(() => setRecord(editMusic.musicID, editRecord));
  });

  const openEditor = (music: Music) => {
    const editor = JSON.parse(JSON.stringify(getRecord(music.musicID))) as MyRecord<StatusValues>;

    setEditMusic(music);
    dispatch({
      type: "initialize",
      payload: {
        record: editor,
      },
    });
    open();
  };

  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <>
          <div
            className={`flex justify-between pb-4 pt-4 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <h2 className="text-3xl font-semibold tracking-widest first-letter:text-4xl">
              記録帳
            </h2>
            <div className="flex items-end gap-x-8 mr-4 z-10">
              <div className="flex font-semibold">
                <Checkbox
                  id="diffToggle"
                  checked={diffMode}
                  handler={(_: string) => setDiffMode(!diffMode)}
                  value={""}
                >
                  -MAX
                </Checkbox>
              </div>
              <SortButton />
              <a
                type="button"
                className="relative lg:hidden"
                onClick={() => setShowFilter(!showFilter)}
              >
                <div className="flex font-semibold items-center gap-x-1">
                  filter<Icon icon={ICON_FILTER} />
                </div>
                <div className="absolute w-50 mt-2 right-0">
                  <List show={showFilter} ref={filterListRef}>
                    <MusicFilter
                      levelLower={levelRange(filter.difficulty).lower}
                      levelUpper={levelRange(filter.difficulty).upper}
                      target={{
                        value: filter.difficulty,
                        setter: (s: string) =>
                          filterDispatch({
                            type: "changeDifficulty",
                            payload: { d: parseInt(s) },
                          }),
                      }}
                      lower={{
                        value: filter.levelLower,
                        setter: (s: string) =>
                          filterDispatch({
                            type: "changeLower",
                            payload: { l: parseInt(s) },
                          }),
                      }}
                      upper={{
                        value: filter.levelUpper,
                        setter: (s: string) =>
                          filterDispatch({
                            type: "changeUpper",
                            payload: { u: parseInt(s) },
                          }),
                      }}
                    />
                    <RecordFilter
                      handler={changeRecordDifficulty}
                      isChecked={isFiltered}
                    />
                  </List>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-x-15 py-5">
              <form className="hidden lg:block">
                <MusicFilter
                  levelLower={levelRange(filter.difficulty).lower}
                  levelUpper={levelRange(filter.difficulty).upper}
                  target={{
                    value: filter.difficulty,
                    setter: (s: string) =>
                      filterDispatch({
                        type: "changeDifficulty",
                        payload: { d: parseInt(s) },
                      }),
                  }}
                  lower={{
                    value: filter.levelLower,
                    setter: (s: string) =>
                      filterDispatch({
                        type: "changeLower",
                        payload: { l: parseInt(s) },
                      }),
                  }}
                  upper={{
                    value: filter.levelUpper,
                    setter: (s: string) =>
                      filterDispatch({
                        type: "changeUpper",
                        payload: { u: parseInt(s) },
                      }),
                  }}
                />
                <RecordFilter
                  handler={changeRecordDifficulty}
                  isChecked={isFiltered}
                />
              </form>
              <div className="w-full xl:col-span-4 place-self-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none gap-y-3 gap-x-5">
                {sortedMusic(4).map((music) => (
                  <a
                    type="button"
                    key={music.musicID.toString()}
                    onClick={() => openEditor(music)}
                  >
                    <Record
                      title={music.musicName}
                      jacketUrl={music.jacketUrl}
                      diff={diffMode}
                      status={getRecord(music.musicID).status}
                      score={getRecord(music.musicID).score}
                      filter={recordDifficulty()}
                      level={music.level}
                      notes={music.notes}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {modal(
            <div className="max-w-[50em]">
              <RecordEditor music={editMusic} record={editRecord} dispatch={dispatch} />
            </div>,
          )}
        </>
      )}
    </ThemeConsumer>
  );
};

export default Records;
