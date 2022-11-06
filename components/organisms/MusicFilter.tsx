import React from "react";
import { DIFFICULTY } from "~/types/index.ts";
import { Disclosure } from "@headlessui/react";
import { MultiRange } from "~/components/organisms/MultiRange.tsx";
import { Icon, ICON_MINUS, ICON_PLUS } from "~/components/atoms/Icon.tsx";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Selectbox } from "~/components/atoms/Selectbox.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";
import { MusicFilterActions, MusicFilterState } from "~/hooks/useMusicFilter.ts";

export const MusicFilter: React.FC<Props> = React.memo(
  ({ levelRange, artists, filter, dispatch }) => {
    return (
      <ThemeConsumer>
        {({ darkMode }) => (
          <div className="flex-col divide-y">
            <div
              className={`grid gap-y-5 px-2 pt-6 lg:pt-4 pb-15 ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="grid">
                <span className="font-semibold tracking-widest mb-1.5">レベル</span>
                <Selectbox
                  group="range-diff"
                  options={DIFFICULTY}
                  selected={filter.difficulty}
                  setSelected={(input: string) =>
                    dispatch({
                      type: "changeDifficulty",
                      payload: {
                        d: +input,
                      },
                    })}
                />
              </div>
              <MultiRange
                min={levelRange.lower}
                max={levelRange.upper}
                minVal={filter.levelLower}
                maxVal={filter.levelUpper}
                dispatch={dispatch}
              />
            </div>
            <div className={`py-6 ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
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
                          handler={() => undefined}
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
  },
);

export type Props = {
  levelRange: {
    lower: number;
    upper: number;
  };
  artists: Artists;
  filter: MusicFilterState<number>;
  dispatch: React.Dispatch<MusicFilterActions>;
};
