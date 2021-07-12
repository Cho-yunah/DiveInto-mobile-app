export type findContentsProps = {
  id: number;
  subDesc: string;
  changeDescList: {
    id: number;
    contents: string;
  }[];
  close: string;
};
