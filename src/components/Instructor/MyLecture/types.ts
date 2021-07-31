import { Organization, Level, Region } from '@typing/common';
export type InstructorMyLecture = {
  id: number;
  title: string;
  organization: Organization;
  level: Level;
  region: Region;
  imageUrl: string;
  price: number;
  maxNumber?: number;
  period?: number;
  lectureTime?: string;
  equipmentNames?: string[];
  leftScheduleDate?: number;
  isClosed?: boolean;
};
