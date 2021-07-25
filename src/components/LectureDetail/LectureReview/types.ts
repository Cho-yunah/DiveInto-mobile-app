export type PersonalReviewItem = {
  avgRate: number;
  instructorRate: number;
  lectureRate: number;
  locationRate: number;
  content: string;
  pics: string[];
};

export type SortByType =
  | 'writeDate,DESC'
  | 'totalStarAvg,DESC'
  | 'totalStarAvg,ASC';
