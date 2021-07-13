export type NoticeListItemProps = {
  title: string;
  date: string;
  id: number;
};

export type FAQstaticDataProps =
  | {
      id: number;
      subject: string;
      DescList: {
        id: number;
        contents: string;
      }[];
    }
  | undefined;

export type FAQListItemProps = {
  FAQ_id: number;
  desc: string;
  type: 'lecturer' | 'manual' | 'complain' | 'ETC';
};
