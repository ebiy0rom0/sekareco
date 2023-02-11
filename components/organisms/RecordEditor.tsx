import React, { Dispatch } from "react";
import { DifficultyValues, StatusValues } from "~/types/index.ts";
import { Difficulty } from "~/components/atoms/Difficulty.tsx";
import { Drumroll } from "~/components/atoms/DrumRoll.tsx";
import { Status } from "~/components/atoms/Status.tsx";
import { MusicCard } from "~/components/organisms/MusicCard.tsx";
import { Input } from "~/components/atoms/Input.tsx";
import { EditActions } from "~/hooks/useRecordEditor.ts";

export const RecordEditor: React.FC<Props> = (props) => {
  return (
    <div className="grid gap-3 justify-items-center">
      <MusicCard title={props.music.title} url={props.music.jacketUrl} />
      <div className="flex flex-col md:flex-row gap-5">
        {props.record.status.map((s, i) => (
          <div
            key={i.toString()}
            className="grid grid-cols-2 md:grid-cols-1 gap-3 justify-items-center"
          >
            <Difficulty difficulty={i as DifficultyValues} level={props.music.level[i]} />
            <Drumroll
              rollPrev={() => props.dispatch({ type: "decrement", payload: { d: i } })}
              rollNext={() => props.dispatch({ type: "increment", payload: { d: i } })}
            >
              <Status status={s} />
            </Drumroll>
            <div className="flex gap-2 col-span-full items-center">
              <Input
                id={i.toString()}
                value={props.record.score[i].toString()}
                type="text"
                labelName=""
                onChange={(e) =>
                  props.dispatch({
                    type: "setScore",
                    payload: {
                      d: i,
                      score: isNaN(+e.target.value) ? 0 : +e.target.value,
                    },
                  })}
              />
              <span>/</span>
              <span>{props.music.notes[i] * 3}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type Props = {
  music: Music;
  dispatch: Dispatch<EditActions>;
  record: MyRecord<StatusValues>;
};
