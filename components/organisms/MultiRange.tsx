import React, { useCallback, useState, useRef, useEffect } from "react";
import { HogeActions } from "~/hooks/useMusicFilter.ts";

export const MultiRange: React.FC<Props> = props => {
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - props.min) / (props.max - props.min)) * 100),
    [props.min, props.max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(props.minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [props.minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(props.maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [props.maxVal, getPercent]);

  return (
    <div className="flex items-center content-center">
      <div className="relative w-full">
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.minVal}
          ref={minValRef}
          onChange={event =>
            props.dispatch({type: "changeLower", payload: {l: +event.target.value}})
          }
          className="thumb z-3 pointer-events-none absolute h-0 w-full outline-0"
        />
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.maxVal}
          ref={maxValRef}
          onChange={event =>
            props.dispatch({type: "changeUpper", payload: {u: +event.target.value}})
          }
          className="thumb z-4 pointer-events-none absolute h-0 w-full outline-0"
        />
        <div className="absolute w-full bg-gray-300 rounded-full h-2 z-1" />
        <div ref={range} className="absolute bg-sky-400 h-2 z-2" />
        <div className="absolute left-0 text-sm mt-5">{props.minVal}</div>
        <div className="absolute -right-1 text-sm mt-5">{props.maxVal}</div>
      </div>
    </div>
  );
}

type Props = {
  min: number
  max: number
  minVal: number
  maxVal: number
  dispatch: React.Dispatch<HogeActions>
}