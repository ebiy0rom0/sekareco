import React from "react";
import { DIFFICULTY } from "~/types/index.ts";
import { Disclosure } from "@headlessui/react";
import { Range } from "~/components/atoms/Range.tsx";
import { Icon, ICON_MINUS, ICON_PLUS } from "~/components/atoms/Icon.tsx";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Selectbox } from "~/components/atoms/Selectbox.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { MusicFilterState, MusicFilterActions } from "../../hooks/useMusicFilter.ts";

export const MusicFilter: React.FC<Props> = React.memo(({levelRange, artists, filter, dispatch}) => {
  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <div className="flex-col divide-y">
          <div className={`py-6 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}>
            <Selectbox
              group="range-diff"
              options={DIFFICULTY}
              value={filter.difficulty}
              setter={(input: string) =>
                dispatch({
                  type: "changeDifficulty",
                  payload: {
                    d: parseInt(input)
                  }
                }
              )}
              width={24}
            >
              絞り込み難易度
            </Selectbox>
          </div>
          <div className={`py-6 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}>
            <Range
              min={levelRange.lower}
              max={levelRange.upper}
              value={filter.levelLower}
              setter={(input: string) =>
                dispatch({
                  type: "changeLower",
                  payload: {
                    l: parseInt(input)
                  }
                }
              )}
            >
              レベル下限
            </Range>
            <span className="ml-3">{filter.levelLower}</span>
          </div>
          <div className={`py-6 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}>
            <Range
              min={levelRange.lower}
              max={levelRange.upper}
              value={filter.levelUpper}
              setter={(input: string) =>
                dispatch({
                  type: "changeUpper",
                  payload: {
                    u: parseInt(input)
                  }
                }
              )}
            >
              レベル上限
            </Range>
            <span className="ml-3">{filter.levelUpper}</span>
          </div>
          <div className={`py-6 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full pr-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold tracking-widest">ユニット</span>
                        <Icon icon={open ? ICON_MINUS : ICON_PLUS} />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-4 pt-6">
                      {Object.entries(artists).map(([k, v]) => (
                        <Checkbox
                          key={k.toString()}
                          id={`filter-difficulty-${k}`}
                          handler={()=>undefined}
                          value={k}
                          checked={true}
                        >
                          {v.artistName}
                        </Checkbox>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
        </div>
      )}
    </ThemeConsumer>
  );
});

export type Props = {
  levelRange: {
    lower: number,
    upper: number
  }
  artists: Artists
  filter: MusicFilterState
  dispatch: React.Dispatch<MusicFilterActions>
};
