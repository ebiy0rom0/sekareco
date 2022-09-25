import React, { useState } from "react";

export const useInput = (defaultValue: string): [
  () => string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [value, setValue] = useState<string>(defaultValue);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return [
    () => value,
    handle,
  ];
};
