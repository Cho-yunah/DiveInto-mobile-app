// 리뷰 평균 평점 타입
export type ReivewTotalAvgProps = {
  id: number;
};

// 각 강의 필터 타입
export type LectureFilterProps = {
  text: string;
  active?: boolean;
};

// 각 강의에 대한 이미지 타입
export type LectureImageProps = {
  img: string;
};

// 각 강의에 대한 내용 타입
export type LectureContentsProps = {
  id: number;
  title: string;
  organization: string;
  level: string;
  region: string;
};

//  강의 컴포넌트 타입
export type CommonLectureProps = {
  id: number;
  title: string;
  organization: string;
  level: string;
  region: string;
  imageUrl: string;
};
