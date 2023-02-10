import { useState, useCallback } from "react";
import { MultiRange } from "~/components/organisms/MultiRange.tsx";

export const useMultiRange = (min: number, max: number): [number, number, () => JSX.Element] => {
  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);

  useCallback(() => {
    setLow(min);
    setHigh(max);
  }, [min, max]);

  const render = (): JSX.Element => (
    <MultiRange
      min={min}
      max={max}
      low={low}
      high={high}
      onChangeLow={(n: number) => setLow(n < min ? min : n > max ? max : n)}
      onChangeHigh={(n: number) => setHigh(n > max ? max : n < min ? min : n)}
    />
  )

  return [low, high, render]
}