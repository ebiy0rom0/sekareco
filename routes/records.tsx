import React, { useRef, useState } from "react";
import { DIFFICULTY, StatusValues } from "~/types/index.ts";
import { apiFactory } from "~/api/apiFactory.ts";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Record } from "~/components/organisms/Record.tsx";
import { MusicFilter } from "~/components/organisms/MusicFilter.tsx";
import { RecordFilter } from "~/components/organisms/RecordFilter.tsx";
import { RecordEditor } from "~/components/organisms/RecordEditor.tsx";
import { SortButton } from "~/components/organisms/SortButton.tsx";
import { FilterButton } from "~/components/organisms/FilterButton.tsx";
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

// testdata
const artists = {
  1: {
    artistID: 1,
    artistName: "VIRTUAL SINGER",
    logoUrl: "hoge.png"
  },
  2: {
    artistID: 2,
    artistName: "Leo/need",
    logoUrl: "hoge.png"
  },
  3: {
    artistID: 3,
    artistName: "MORE MORE JUMP!",
    logoUrl: "hoge.png"
  },
  4: {
    artistID: 4,
    artistName: "Vivid BAD SQUAD",
    logoUrl: "hoge.png"
  },
  5: {
    artistID: 5,
    artistName: "ワンダーランズ×ショータイム",
    logoUrl: "hoge.png"
  },
  6: {
    artistID: 6,
    artistName: "25時、ナイトコードで。",
    logoUrl: "hoge.png"
  },
  7: {
    artistID: 7,
    artistName: "その他",
    logoUrl: "hoge.png"
  },
  8: {
    artistID: 8,
    artistName: "特殊カテゴリ",
    logoUrl: "hoge.png"
  },
}

const Records: React.FC = () => {
  const [music, levelRange] = useMusic();
  const { getRecord, setRecord } = useRecord(1);

  // music filtering
  const [filter, filterDispatch, filteredMusic] = useMusicFilter(music, levelRange, artists);

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
              <FilterButton musicFilterProps={{
                levelRange: levelRange(filter.difficulty),
                artists: artists,
                filter: filter,
                dispatch: filterDispatch
              }} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-x-15 py-5">
              <form className="hidden lg:block">
                <MusicFilter
                  levelRange={levelRange(filter.difficulty)}
                  artists={artists}
                  filter={filter}
                  dispatch={filterDispatch}
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
          <div className="relative z-10">
            {modal(
              <div className="max-w-[50em]">
                <RecordEditor music={editMusic} record={editRecord} dispatch={dispatch} />
              </div>,
            )}
          </div>
        </>
      )}
    </ThemeConsumer>
  );
};

export default Records;
