export type FAQContentsProps =
  | {
      subject: string;
      descList: {
        id: number;
        contents: string;
      }[];
    }
  | undefined;
