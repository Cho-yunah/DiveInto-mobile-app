export type PersonalReviewItem = {
  avgRate: number;
  instructorRate: number;
  lectureRate: number;
  locationRate: number;
  content: string;
  pics: string[];
};

export type PersonalReviewProps = {
  item: PersonalReviewItem;
  index: number;
};
