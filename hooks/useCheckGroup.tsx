import { useCallback, useState } from "react";
import { Checkbox } from "~/components/atoms/Checkbox.tsx";

export const useCheckGroup = <T extends string | number>(lists: {[label: string]: T}): [T[], () => JSX.Element] => {
  const [checkList, setCheckList] = useState(() => Object.keys(lists).map(() => true))

  const handler = (index: number) => setCheckList((prev) => prev.map((c, i) => (i === index ? !c : c)))

  const checkedValues = Object.values(lists).filter((_, i) => checkList[i])

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