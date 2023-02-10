import { useCallback, useState } from "react";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";

export const useCheckGroup = (lists: {[label: string]: string | number}) => {
  const [checkList, setCheckList] = useState(() => Object.keys(lists).map(() => true))

  const handler = (index: number) => setCheckList((prev) => prev.map((c, i) => (i === index ? !c : c)))

  const checkedValues = useCallback((): Values<typeof lists>[] => Object.values(lists).filter((_, i) => checkList[i]), [checkList])

  const render = (): JSX.Element => (
    <>
      {Object.entries(lists).map(([k, v], index) => (
        <Checkbox
          key={k.toString()}
          id={`checklist-${k}`}
          handler={() => handler(index)}
          value={v}
          checked={checkList[index]}
        >
          { k }
        </Checkbox>
      ))}
    </>
  );

  return [checkedValues, render]
}