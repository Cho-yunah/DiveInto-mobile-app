import { atom, selector } from 'recoil';

export const searchText = atom({
  key: 'searchText',
  default: '',
});

export const lectureDetailState = atom({
  key: 'lectureDetail',
  default: {
    id: 0, // 강의 id
    title: '', // 강의 제목
    classKind: '',
    organization: '', // AIDA
    level: '',
    maxNumber: 0, // 최대 가능 인원
    period: 0,
    description: '', // 강의 설명
    price: 0, // 가격
    region: '', // 지역
    reviewTotalAvg: 0, // 리뷰 전체 평점
    reviewCount: 0, // 리뷰 개수
    isMarked: false, // 찜하기
  },
});

export const lectureInstructorProfileState = atom({
  key: 'lectureInstructorDetail',
  default: {
    instructorId: 0,
    nickName: '',
    selfIntroduction: '',
    profilePhotoUrl: '',
  },
});

export const lectureInfoSelector = selector({
  key: 'lectureInfo',
  get: ({ get }) => {
    const { title, organization, level, description, price } =
      get(lectureDetailState);

    return { title, organization, level, description, price };
  },
});
