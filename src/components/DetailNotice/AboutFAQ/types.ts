export type FAQContentsProps = {
  subject: string | undefined;
  descList:
    | {
        id: number;
        contents: string;
      }[]
    | undefined;
};
