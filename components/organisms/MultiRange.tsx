import { FC, useCallback, useEffect, useRef } from "react";
import { HogeActions } from "~/hooks/useMusicFilter.ts";

export const MultiRange: FC<Props> = ({ min, max, low, high, onChangeLow, onChangeHigh }) => {
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(low);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [low, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(high);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [high, getPercent]);

  return (
    <div className="flex items-center content-center">
      <div className="relative w-full">
        <input
          type="range"
          min={min}
          max={max}
          value={low}
          ref={minValRef}
          onChange={(event) => onChangeLow(+event.target.value)}
          className="thumb z-3 pointer-events-none absolute h-0 w-full outline-0"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={high}
          ref={maxValRef}
          onChange={(event) => onChangeHigh(+event.target.value)}
          className="thumb z-4 pointer-events-none absolute h-0 w-full outline-0"
        />
        <div className="absolute w-full bg-gray-300 rounded-full h-2 z-1" />
        <div ref={range} className="absolute bg-sky-400 h-2 z-2" />
        <div className="absolute left-0 text-sm mt-5">{ low }</div>
        <div className="absolute -right-1 text-sm mt-5">{ high }</div>
      </div>
    </div>
  );
};

type Props = {
  min: number;
  max: number;
  low: number;
  high: number;
  onChangeLow: (n: number) => void;
  onChangeHigh: (n: number) => void;
};
