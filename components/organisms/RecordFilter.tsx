import { difficulty } from "~/types/index.ts";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";
import { Disclosure } from "~/components/atoms/Disclosure.tsx";
import { ThemeCtx } from "~/hooks/useTheme.tsx";

export const RecordFilter = (props: Props) => {
  return (
    <ThemeCtx.Consumer>
      {({ darkMode }) => (
        <>
          <div className={`py-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <Disclosure>
              <span className="font-semibold tracking-widest">難易度</span>
              <div className="space-y-4 pt-6">
                {Object.entries(difficulty).map(([k, v]) => (
                  <Checkbox
                    key={k.toString()}
                    id={`filter-difficulty-${k}`}
                    setter={props.setter}
                    value={v}
                    checked={props.isChecked(v)}
                  >
                    {k}
                  </Checkbox>
                ))}
              </div>
            </Disclosure>
          </div>
        </>
      )}
    </ThemeCtx.Consumer>
  );
};

type Props = {
  setter: (n: string) => void;
  isChecked: (n: number) => boolean;
};
