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

export type SortBySelectorProps = {
  sortByText: SortByType;
  sortByTextKr: '최신순' | '높은평순' | '낮은평순';
  isDisabled: boolean;
};
