export type NextLectureListType = {
  reservationId: number;
  reservationDate: string;
  lectureTitle: string;
  organization: string;
  level: string;
  lectureImageUrl: string;
  instructorNickname: string;
  remainingDate: number;
};

export type LastLectureListType = {
  reservationId: number;
  reservationDate: string;
  lectureTitle: string;
  organization: string;
  level: string;
  lectureImageUrl: string;
  instructorNickname: string;
  isExistedReview: boolean;
};
