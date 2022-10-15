declare type Music = {
  musicID: number;
  artistID: number;
  musicName: string;
  jacketUrl: string;
  level: number[];
  notes: number[];
};

declare type MyRecord<T> = {
  status: T[];
  score: number[];
};
declare type MyRecords<T> = {
  [n: number]: MyRecord<T>;
};

declare type Keys<T> = keyof T;
declare type Values<T> = T[Keys<T>];
