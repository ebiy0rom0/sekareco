// import { apiClient } from "~/api/handler/apiHandler.ts";
import { StatusValues } from "~/types/index.ts";

export const recordRepository = {
  getMyRecord: async (personID: number) => {
    // when successfully get, returns score and clear status by parameter person's
    // const json = await getApiHandler()
    //   .get(`records/${personId}`)
    //   .json<P_Record.Record<ClearStatus>>()
    //   .catch<P_Record.Record<ClearStatus>>(() => ({}));

    // return json ?? {};
    console.log(`get record. personID is ${personID}`);
    return await testdata as MyRecords<StatusValues>;
  },

  registRecord: async (musicID: number, record: MyRecord<StatusValues>) => {
    // when successfully regist, returns status 201 and not returns response body
    // await apiClient
    //   .post(`records/${musicID}`, {
    //     record: record,
    //   })
    //   .catch();
    console.log(`regist record. musicID: ${musicID}, record: ${record}`);
    return await true;
  },
};

const testdata = {
  67: {
    status: [3, 3, 3, 3, 3],
    score: [471, 837, 1212, 1977, 2415],
  },
  15: {
    status: [3, 3, 3, 3, 2],
    score: [324, 1131, 2007, 2589, 3119],
  },
  31: {
    status: [3, 3, 3, 3, 3],
    score: [444, 1230, 2037, 2433, 2967],
  },
  95: {
    status: [3, 3, 3, 3, 3],
    score: [552, 1125, 1785, 2712, 3159],
  },
  208: {
    status: [3, 3, 3, 3, 3],
    score: [618, 864, 1266, 2004, 2307],
  },
  221: {
    status: [0, 0, 3, 3, 3],
    score: [0, 0, 2031, 2724, 3336],
  },
  119: {
    status: [3, 3, 3, 3, 3],
    score: [597, 1032, 1425, 2133, 2499],
  },
  78: {
    status: [3, 3, 3, 3, 2],
    score: [468, 966, 1638, 2319, 2700],
  },
  85: {
    status: [3, 3, 3, 3, 2],
    score: [564, 978, 1812, 2925, 3497],
  },
  104: {
    status: [3, 3, 3, 3, 3],
    score: [531, 1113, 1914, 2688, 3267],
  },
  152: {
    status: [3, 3, 3, 3, 3],
    score: [471, 837, 1212, 2283, 2829],
  },
  198: {
    status: [3, 3, 3, 3, 2],
    score: [609, 1095, 1764, 2406, 2753],
  },
  58: {
    status: [3, 3, 3, 3, 2],
    score: [615, 1050, 1671, 1977, 2414],
  },
  106: {
    status: [3, 3, 3, 3, 2],
    score: [354, 753, 1443, 2316, 2388],
  },
  147: {
    status: [3, 3, 3, 3, 3],
    score: [552, 1257, 1986, 3051, 3843],
  },
  160: {
    status: [3, 3, 3, 3, 2],
    score: [726, 1227, 1920, 2646, 3245],
  },
  172: {
    status: [3, 3, 3, 3, 3],
    score: [780, 1467, 2199, 2928, 3618],
  },
  182: {
    status: [3, 3, 3, 3, 3],
    score: [969, 1182, 2274, 3096, 3732],
  },
  214: {
    status: [3, 3, 3, 3, 2],
    score: [591, 1047, 2376, 2928, 3524],
  },
  94: {
    status: [3, 3, 3, 3, 3],
    score: [546, 1071, 1782, 2796, 3420],
  },
  24: {
    status: [3, 3, 3, 3, 2],
    score: [288, 714, 1209, 1692, 1998],
  },
  96: {
    status: [3, 3, 3, 3, 2],
    score: [315, 762, 1395, 1848, 2391],
  },
  163: {
    status: [3, 3, 3, 3, 2],
    score: [471, 837, 1212, 1977, 3247],
  },
  194: {
    status: [3, 3, 3, 3, 3],
    score: [783, 1224, 1794, 2583, 2415],
  },
  13: {
    status: [3, 3, 3, 3, 2],
    score: [444, 1113, 1560, 2475, 2850],
  },
  37: {
    status: [3, 3, 3, 3, 2],
    score: [552, 1272, 2553, 3495, 3930],
  },
  127: {
    status: [3, 3, 3, 3, 2],
    score: [441, 870, 1764, 2376, 2804],
  },
  75: {
    status: [3, 3, 3, 3, 2],
    score: [612, 1254, 2229, 3201, 3590],
  },
  197: {
    status: [3, 3, 3, 3, 2],
    score: [612, 840, 1557, 2169, 2649],
  },
  138: {
    status: [3, 3, 3, 3, 1],
    score: [903, 1635, 2361, 3525, 4645],
  },
  14: {
    status: [3, 3, 3, 3, 1],
    score: [480, 1308, 2031, 2952, 3540],
  },
  114: {
    status: [3, 3, 3, 3, 1],
    score: [750, 1692, 2469, 3702, 4473],
  },
};
