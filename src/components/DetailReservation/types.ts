export type EachCommonInfoProps = {
  name: string;
  userInfo: string | number;
  type: 'user' | 'cost' | 'equipment';
  emphasis?: boolean;
  size?: string;
};

export type EachScheduleInfoProps = {
  startTime: string;
  endTime: string;
  date: string;
  round: number;
};

export type StartOrEndScheduleInfoProps = {
  scheduleType: 'start' | 'end';
  date: string;
  time: string;
};
