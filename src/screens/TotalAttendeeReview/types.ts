export type AttendeeReviewDataType = {
  list: AttendeeReviewListType[];
  totalElements: number;
};

export type AttendeeReviewListType = {
  lectureTitleUI: {
    id: number;
    title: string;
  };
  reviewModel: {
    id: number;
    instructorStar: number;
    lectureStar: number;
    locationStar: number;
    totalStarAvg: number;
    description: string;
    writeDate: string;
  };
  reviewImageModels: {
    id: number;
    url: string;
  }[];
};
