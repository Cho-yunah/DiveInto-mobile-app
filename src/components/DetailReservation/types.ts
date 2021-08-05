export type EachCommonInfoProps = {
  name: string;
  userInfo: string | number;
  type: 'user' | 'costOrEquipment';
  emphasis?: boolean;
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
