import { FC, useState } from "react";
import { DIFFICULTY, DifficultyValues, StatusValues } from "~/types/index.ts";
import { apiFactory } from "~/api/apiFactory.ts";
import { ICON_FILTER, ICON_SORT } from "~/components/atoms/Icon.tsx";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Selectbox } from "~/components/atoms/Selectbox.tsx";
import { ScoreCard } from "~/components/organisms/ScoreCard.tsx";
import { RecordEditor } from "~/components/organisms/RecordEditor.tsx";
import { Popover } from "~/components/organisms/Popover.tsx";
import { Disclosure } from "~/components/organisms/Disclosure.tsx";
import { RadioGroup } from "~/components/organisms/RadioGroup.tsx";
import { useMusic } from "~/hooks/useMusic.ts";
import { useGroup } from "~/hooks/useGroup.ts";
import { useRecord } from "~/hooks/useRecord.ts";
import { useRecordEditor } from "~/hooks/useRecordEditor.ts";
import { useMultiRange } from "~/hooks/useMultiRange.tsx";
import { useModal } from "~/hooks/useModal.tsx";
import { useTheme } from "~/hooks/useTheme.tsx";
import { useI18n } from "~/hooks/useI18n.ts";
import { useFilter } from "~/hooks/useFilter.ts";
import { useSort } from "~/hooks/useSort.ts";
import { useCheckGroup } from "~/hooks/useCheckGroup.tsx";
import { useObjectCompare } from "~/utils/useObjectCompare.ts";

const ScoreBook: FC = () => {
  const { t } = useI18n();
  const { dark, switchTheme } = useTheme();

  const [music, levelRange] = useMusic();
  const [group, groupkv] = useGroup();
  const { getRecord, setRecord } = useRecord(1);

  const [difficulty, setDifficulty] = useState<DifficultyValues>(DIFFICULTY.MASTER);
  const sortKeys: { [target: string]: Keys<Music> } = {
    [t.TARGET_DEFAULT]: "musicID",
    [t.TARGET_LEVEL]: "level",
    [t.TARGET_UNIT]: "groupID",
  };
  const sortOrders: { [target: string]: boolean } = { [t.ORDER_ASC]: true, [t.ORDER_DESC]: false };
  const [sortKey, setSortKey] = useState(Object.keys(sortKeys)[0]);
  const [sortOrder, setSortOrder] = useState(Object.keys(sortOrders)[0]);

  const [low, high, renderLevelMultiRange] = useMultiRange(...levelRange(difficulty));
  const [showGroupIDs, renderGroupIDCheckGroup] = useCheckGroup(groupkv);
  const [showDifficulty, renderDifficultyCheckGroup] = useCheckGroup(DIFFICULTY);

  const [filtered] = useFilter(music, [
    ["groupID", showGroupIDs],
    ["level", { [difficulty]: [...new Set([...Array(high - low + 1)].map((_, i) => low + i))] }], // wip
  ]);
  const [sorted] = useSort(filtered, [[
    sortKeys[sortKey],
    sortKeys[sortKey] === "level" ? { [difficulty]: sortOrders[sortOrder] } : sortOrders[sortOrder],
  ]]);

  // score display mode[raw data or max minus]
  const [maxMinus, setMaxMinus] = useState(false);

  // editor
  const [editMusic, setEditMusic] = useState<Music>({
    musicID: 0,
    title: "",
    groupID: 0,
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
    <>
      <div
        className={`flex justify-between pb-4 pt-4 border-b ${
          dark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <h2
          className={`text-3xl font-semibold tracking-widest first-letter:text-4xl ${
            dark ? "first-letter:text-pink-500/90" : "first-letter:text-cyan-400"
          }`}
        >
          {t.SCORE_BOOK}
        </h2>
        <div className="flex items-end gap-x-8 mr-4 z-10">
          <div className="font-semibold">
            <Checkbox
              id="diffToggle"
              checked={maxMinus}
              handler={(_: string) => setMaxMinus(!maxMinus)}
              value={""}
            >
              MAX－
            </Checkbox>
          </div>
          <Popover icon={ICON_SORT}>
            <div className="w-30">
              <RadioGroup
                label={t.SORT_TARGET}
                items={Object.keys(sortKeys)}
                value={sortKey}
                onChange={setSortKey}
              />
              <RadioGroup
                label={t.SORT_ORDER}
                items={Object.keys(sortOrders)}
                value={sortOrder}
                onChange={setSortOrder}
              />
            </div>
          </Popover>
          <div className="flex lg:hidden">
            <Popover icon={ICON_FILTER}>
              <div className="w-56">
                <div
                  className={`grid gap-y-5 px-2 pt-6 lg:pt-4 pb-15 ${
                    dark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <Selectbox
                    options={DIFFICULTY}
                    selected={difficulty}
                    onChange={(select: string) => setDifficulty(+select as DifficultyValues)}
                  />
                  {renderLevelMultiRange()}
                </div>
                <Disclosure title={t.GROUP}>
                  {renderGroupIDCheckGroup()}
                </Disclosure>
                <Disclosure title={t.DIFFICULTY}>
                  {renderDifficultyCheckGroup()}
                </Disclosure>
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative grid grid-cols-1 xl:grid-cols-5 gap-x-15 py-5">
          <form className="hidden lg:block divide-y">
            <div
              className={`grid gap-y-5 px-2 pt-6 lg:pt-4 pb-15 ${
                dark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <Selectbox
                options={DIFFICULTY}
                selected={difficulty}
                onChange={(select: string) => setDifficulty(+select as DifficultyValues)}
              />
              {renderLevelMultiRange()}
            </div>
            <Disclosure title={t.GROUP}>
              {renderGroupIDCheckGroup()}
            </Disclosure>
            <Disclosure title={t.DIFFICULTY}>
              {renderDifficultyCheckGroup()}
            </Disclosure>
          </form>
          <div className="w-full xl:col-span-4 place-self-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none gap-y-3 gap-x-5">
            {sorted.map((music) => (
              <a
                type="button"
                key={music.musicID.toString()}
                onClick={() => openEditor(music)}
              >
                <ScoreCard
                  music={music}
                  diff={maxMinus}
                  status={getRecord(music.musicID).status}
                  score={getRecord(music.musicID).score}
                  filter={showDifficulty}
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
  );
};

export default ScoreBook;
