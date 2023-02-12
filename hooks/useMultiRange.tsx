import { useEffect, useState } from "react";
import { MultiRange } from "~/components/organisms/MultiRange.tsx";

export const useMultiRange = (min: number, max: number): [number, number, () => JSX.Element] => {
  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);

  useEffect(() => {
    setLow(min);
    setHigh(max);
  }, [min, max]);

  const render = (): JSX.Element => (
    <MultiRange
      min={min}
      max={max}
      low={low}
      high={high}
      onChangeLow={(n: number) => setLow(n < min ? min : n > high ? high : n)}
      onChangeHigh={(n: number) => setHigh(n > max ? max : n < low ? low : n)}
    />
  );

  return [low, high, render];
};
