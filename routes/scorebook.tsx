import React, { useState } from "react";
import { DIFFICULTY, StatusValues } from "~/types/index.ts";
import { apiFactory } from "~/api/apiFactory.ts";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { ScoreCard } from "~/components/organisms/ScoreCard.tsx";
import { MusicFilter } from "~/components/organisms/MusicFilter.tsx";
import { RecordEditor } from "~/components/organisms/RecordEditor.tsx";
import { Popover } from "~/components/organisms/Popover.tsx";
import { Disclosure } from "~/components/organisms/Disclosure.tsx";
import { useMusic } from "~/hooks/useMusic.ts";
import { useRecord } from "~/hooks/useRecord.ts";
import { useMusicFilter } from "~/hooks/useMusicFilter.ts";
import { useRecordFilter } from "~/hooks/useRecordFilter.ts";
import { useRecordEditor } from "~/hooks/useRecordEditor.ts";
import { useMusicSort } from "~/hooks/useMusicSort.ts";
import { useModal } from "~/hooks/useModal.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { useObjectCompare } from "~/utils/useObjectCompare.ts";
import { ICON_FILTER, ICON_SORT } from "../components/atoms/Icon.tsx";
import { useI18n } from "../hooks/useI18n.ts";
import { RadioGroup } from "~/components/organisms/RadioGroup.tsx";
import { useFilter } from "~/hooks/useFilter.ts";
import { useSort } from "~/hooks/useSort.ts";

// testdata
const artists = {
  1: {
    artistID: 1,
    artistName: "VIRTUAL SINGER",
    logoUrl: "hoge.png",
  },
  2: {
    artistID: 2,
    artistName: "Leo/need",
    logoUrl: "hoge.png",
  },
  3: {
    artistID: 3,
    artistName: "MORE MORE JUMP!",
    logoUrl: "hoge.png",
  },
  4: {
    artistID: 4,
    artistName: "Vivid BAD SQUAD",
    logoUrl: "hoge.png",
  },
  5: {
    artistID: 5,
    artistName: "ワンダーランズ×ショータイム",
    logoUrl: "hoge.png",
  },
  6: {
    artistID: 6,
    artistName: "25時、ナイトコードで。",
    logoUrl: "hoge.png",
  },
  7: {
    artistID: 7,
    artistName: "その他",
    logoUrl: "hoge.png",
  },
  8: {
    artistID: 8,
    artistName: "特殊カテゴリ",
    logoUrl: "hoge.png",
  },
};

const artistss = () => {
  const m: {[s: string]: number} = {} as {string: number};
  Object.entries(artists).map(([_, v]) => { m[v.artistName] = v.artistID })
  return m
}

const ScoreBook: React.FC = () => {
  const { t } = useI18n();
  const [music, levelRange] = useMusic();
  const { getRecord, setRecord } = useRecord(1);

  const sortTarget = [t.TARGET_DEFAULT, t.TARGET_LEVEL, t.TARGET_UNIT]
  const sortOrder = [t.ORDER_ASC, t.ORDER_DESC]
  const [target, setTarget] = useState(sortTarget[0])
  const [order, setOrder] = useState(sortOrder[0])

  const l = levelRange(4).upper - levelRange(4).lower > 0? levelRange(4).upper - levelRange(4).lower : 0
  const a = [...Array(l)].map((_, i) => i + levelRange(4).lower)
  console.log(a)
  const [ filtered ] = useFilter(music, {artistID: [5], level: {4: a}})
  console.log(filtered)

  const [ sorted ] = useSort(filtered, {level: {4: true}})
  console.log(sorted)

  // music filtering
  const [
    musicFilter,
    musicFilterDispatch,
    filteredMusic,
  ] = useMusicFilter(music, levelRange, artists);

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
            <h2
              className={`text-3xl font-semibold tracking-widest first-letter:text-4xl ${
                darkMode ? "first-letter:text-pink-500/90" : "first-letter:text-cyan-400"
              }`}
            >
              { t.SCORE_BOOK }
            </h2>
            <div className="flex items-end gap-x-8 mr-4 z-10">
              <div className="sm:flex font-semibold hidden">
                <Checkbox
                  id="diffToggle"
                  checked={diffMode}
                  handler={(_: string) => setDiffMode(!diffMode)}
                  value={""}
                >
                  -MAX
                </Checkbox>
              </div>
              <Popover icon={ICON_SORT}>
                <RadioGroup label={t.SORT_TARGET} items={sortTarget} value={target} onChange={setTarget} />
                <RadioGroup label={t.SORT_ORDER} items={sortOrder} value={order} onChange={setOrder} />
              </Popover>
              <Popover icon={ICON_FILTER}>
                <MusicFilter
                  levelRange={levelRange(musicFilter.difficulty)}
                  filter={musicFilter}
                  dispatch={musicFilterDispatch}
                />
                <Disclosure
                  title={t.UNIT}
                >
                  {Object.entries(artistss()).map(([k, v]) => (
                    <Checkbox
                      key={k.toString()}
                      id={`checklist-${k}`}
                      handler={() => {}}
                      value={v}
                      checked={true}
                    >
                      { k }
                    </Checkbox>
                  ))}
                </Disclosure>
                <Disclosure
                  title={t.DIFFICULTY}
                >
                  {Object.entries(DIFFICULTY).map(([k, v]) => (
                    <Checkbox
                      key={k.toString()}
                      id={`checklist-${k}`}
                      handler={()=>{}}
                      value={v}
                      checked={true}
                    >
                      { k }
                    </Checkbox>
                  ))}
                </Disclosure>
              </Popover>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-x-15 py-5">
              <form className="hidden lg:block divide-y">
                <MusicFilter
                  levelRange={levelRange(musicFilter.difficulty)}
                  filter={musicFilter}
                  dispatch={musicFilterDispatch}
                />
                <Disclosure
                  title={t.UNIT}
                >
                  {Object.entries(artistss()).map(([k, v]) => (
                    <Checkbox
                      key={k.toString()}
                      id={`checklist-${k}`}
                      handler={() => {}}
                      value={v}
                      checked={true}
                    >
                      { k }
                    </Checkbox>
                  ))}
                </Disclosure>
                <Disclosure
                  title={t.DIFFICULTY}
                >
                  {Object.entries(DIFFICULTY).map(([k, v]) => (
                    <Checkbox
                      key={k.toString()}
                      id={`checklist-${k}`}
                      handler={()=>{}}
                      value={v}
                      checked={true}
                    >
                      { k }
                    </Checkbox>
                  ))}
                </Disclosure>
              </form>
              <div className="w-full xl:col-span-4 place-self-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none gap-y-3 gap-x-5">
                {sortedMusic(4).map((music) => (
                  <a
                    type="button"
                    key={music.musicID.toString()}
                    onClick={() => openEditor(music)}
                  >
                    <ScoreCard
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

export default ScoreBook;
