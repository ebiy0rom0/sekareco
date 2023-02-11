import { useState } from "react";
import { DIFFICULTY } from "~/types/index.ts";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const useLevelFilter = () => {
  const [di, setDi] = useState(DIFFICULTY.MASTER)

  const render = () => (
    <ThemeConsumer>
      {({ darkMode }) => (
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
      )}
    </ThemeConsumer>
  )

  return [render]
}