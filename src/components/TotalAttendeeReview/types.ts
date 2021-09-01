export type EachReivewListProps = {
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

export type ReviewPicsProps = {
  id: number;
  url: string;
};
