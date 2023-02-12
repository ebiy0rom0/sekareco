import { useEffect, useMemo, useState } from "react";
import { apiFactory } from "~/api/apiFactory.ts";

export const useGroup = (): [Group[], { [s: string]: number }] => {
  const [group, setGroup] = useState<Group[]>([]);

  useEffect(() => {
    (async () => {
      const list = await apiFactory.get("music").getGroupList();
      setGroup(list);
    })();
  }, []);

  const groupkv = useMemo(() =>
    group.reduce((prev, g) => {
      return { ...prev, [g.groupName]: g.groupID };
    }, {}), [group]);

  return [group, groupkv];
};
