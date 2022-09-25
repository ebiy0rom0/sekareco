import { difficulty } from "~/types/index.ts";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";

export const RecordFilter = (props: Props) => {
  return (
    <>
      難易度：
      {Object.entries(difficulty).map(([k, v]) => (
        <Checkbox
          key={k.toString()}
          name="difficulty"
          className="ml-4"
          value={v}
          setter={props.setter}
          isChecked={props.isChecked(v)}
        >
          {k}
        </Checkbox>
      ))}
    </>
  );
};

type Props = {
  setter: (n: string) => void;
  isChecked: (n: number) => boolean;
};
