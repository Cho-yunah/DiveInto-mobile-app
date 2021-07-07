export type findContentsProps = {
  id: number;
  subDesc: string;
  close: string;
  changeDescList:
    | {
        id: number;
        contents: string;
      }
    | undefined;
};
