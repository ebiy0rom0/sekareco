import React from "react";
import { difficulty } from "~/types/index.ts";
import { Range } from "~/components/atoms/Range.tsx";
import { Selectbox } from "~/components/atoms/Selectbox.tsx";
import { ThemeCtx } from "~/hooks/useTheme.tsx";

export const MusicFilter = React.memo((props: Props) => {
  return (
    <ThemeCtx.Consumer>
      {({ darkMode }) => (
        <div className="flex-col">
          <div className={`py-6 border-b  ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <Selectbox
              group="range-diff"
              options={difficulty}
              value={props.target.value}
              setter={props.target.setter}
              width={24}
            >
              絞り込み難易度
            </Selectbox>
          </div>
          <div className={`py-6 border-b  ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <Range
              min={props.levelLower}
              max={props.levelUpper}
              value={props.lower.value}
              setter={props.lower.setter}
            >
              レベル下限
            </Range>
            <span className="ml-3">{props.lower.value}</span>
          </div>
          <div className={`py-6 border-b  ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <Range
              min={props.levelLower}
              max={props.levelUpper}
              value={props.upper.value}
              setter={props.upper.setter}
            >
              レベル上限
            </Range>
            <span className="ml-3">{props.upper.value}</span>
          </div>
        </div>
      )}
    </ThemeCtx.Consumer>
  );
});

type Props = {
  levelLower: number;
  levelUpper: number;
  target: {
    value: number;
    setter: (n: string) => void;
  };
  lower: {
    value: number;
    setter: (n: string) => void;
  };
  upper: {
    value: number;
    setter: (n: string) => void;
  };
};
