import { useEffect, useState } from "react";

export const useDelayCallback = (
  delay: number,
  callback: () => void,
  loop?: boolean,
) => {
  const [trigger, setTrigger] = useState(false);
  const [id, setId] = useState(0);

  const start = () => setTrigger(true);
  const stop = () => setTrigger(false);

  const wrapCallback = () => {
    callback();
    setId(0);
    stop(); // re enable trigger
  };

  useEffect(() => {
    if (trigger) {
      const timeoutId = setTimeout(wrapCallback, delay);
      setId(timeoutId);
    } else if (id > 0) {
      // stop callback if before exec
      clearTimeout(id);
      setId(0);
    }
    if (loop && !trigger) start();
  }, [trigger]);

  return { start, stop };
};
