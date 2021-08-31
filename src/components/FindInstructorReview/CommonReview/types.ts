export type CommonReviewProps = {
  reviews: {
    id: number;
    instructorStar: number;
    lectureStar: number;
    locationStar: number;
    totalStarAvg: number;
    description: string;
    writeDate: string;
    reviewImageUrls: string[];
  }[];
};

export type RenderItemParams = {
  id: number;
  instructorStar: number;
  lectureStar: number;
  locationStar: number;
  totalStarAvg: number;
  description: string;
  writeDate: Date;
  reviewImageUrls: string[];
};
