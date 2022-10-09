import React from "react";
import { Difficulty as Type, difficulty } from "~/types/index.ts";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const Difficulty = React.memo((props: Props) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="20"
        viewBox="0 0 100 20"
      >
        <polygon
          points="10,10 90,10 100,20 20,20"
          className={`stroke-2 ${darkMode ? "stroke-slate-500 fill-slate-500" : "stroke-slate-400/50 fill-slate-400/80"}`}
          fillOpacity="0.9"
        />
        <polygon
          points="0,5 70,5 80,15 10,15"
          className={`stroke-1 ${darkMode ? "stroke-slate-400" : "stroke-slate-200"} ${colorSet[props.difficulty]}`}
          fillOpacity="0.9"
        />
        <text
          x="10"
          y="11"
          fontSize="smaller"
          className={`stroke-1 ${darkMode ? "stroke-slate-100 fill-slate-100" : "stroke-slate-800 fill-slate-800"}`}
        >
          {drawName(props.difficulty)}
        </text>
        <text
          x={props.level < 10 ? "85" : "80"}
          y="11"
          fontSize="smaller"
          className={`stroke-1 ${darkMode ? "stroke-sky-400 fill-sky-400" : "stroke-sky-500 fill-sky-500"}`}
        >
          {props.level}
        </text>
      </svg>
    )}
  </ThemeConsumer>
));

// draw html
const drawName = (diff: Type) => Object.entries(difficulty).filter(([_, v]) => v === diff)[0][0];

type Props = {
  class?: string;
  difficulty: Type;
  level: number;
};

const colorSet = {
  [difficulty.EASY]: "fill-green-400/90",
  [difficulty.NORMAL]: "fill-cyan-500/90",
  [difficulty.HARD]: "fill-yellow-500/90",
  [difficulty.EXPERT]: "fill-red-600/90",
  [difficulty.MASTER]: "fill-purple-500/90",
} as const;
