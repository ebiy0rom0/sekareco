import { useState, useCallback } from "react";

// custom hook
export const useRecordFilter = <
  T extends { [s: string]: number },
  U extends T[keyof T],
>(filteredList: T) => {
  const [whiteList, setWhiteList] = useState<U[]>(
    Object.values(filteredList) as U[],
  );

  // setter wrap
  // for use input element
  const changeWhiteList = (input: string) => {
    const inputNum = rounding(parseInt(input));
    const newFilter = isFiltered(inputNum) ? whiteList.filter((d) => d !== inputNum) : [...whiteList, inputNum];
    setWhiteList(newFilter.sort() as U[]);
  };

  // rounding within list value range
  const rounding = (val: number) => val < min() ? min() : val > max() ? max() : val;
  const min = useCallback(() => Math.min(...Object.values(filteredList)), [filteredList]);
  const max = useCallback(() => Math.max(...Object.values(filteredList)), [filteredList]);

  // check already filtered
  const isFiltered = (checkVal: number) => whiteList.some((d) => d === checkVal);

  return {
    whiteList: () => whiteList,
    changeWhiteList,
    isFiltered,
  };
};
