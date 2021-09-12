import { selector, selectorFamily, waitForAll } from 'recoil';

import { getInstanceATK } from '@lib/api/axios';
import {
  AttendeeReviewListCachingState,
  modifyNumCachingState,
  ReserveLectureCachingState,
  WriteReviewCachingState,
} from './store';
import { liekCollectionRefreshState } from '../Global';

// ProfileMainScreen에서 기본 사용자 정보를 받는 dataFetching selector
export const getUserInfoSelector = selector({
  key: '/account',
  get: async ({ get }) => {
    get(modifyNumCachingState);

    const instanceAtk = await getInstanceATK();

    try {
      const response = await instanceAtk.get('/account');

      const userInfo = response.data;

      return userInfo;
    } catch (error) {
      console.log(error);
    }
  },
});

// ProfileHeader에서 필요한 image uri 정보를 받는 dataFetching selector
export const getProfileImg = selector({
  key: '/profile-photo',
  get: async () => {
    const instanceAtk = await getInstanceATK();

    try {
      const { data: imgURI } = await instanceAtk.get('/profile-photo');

      return imgURI;
    } catch (error) {
      console.log(error);
    }
  },
});

// 이 함수를 어디에 둬야하는 것인가??? (http 통신을 여러번 해야하는 경우를 대비해서 한번에 보내서 모든 통신이 완료되면 값을 넘기는 방식)
export const profileMainMultipleEval = selector({
  key: ' multipleEval',
  get: ({ get }) => {
    const [userInfo, imgURI] = get(
      waitForAll([getUserInfoSelector, getProfileImg]),
    );

    return { userInfo, imgURI };
  },
});

// 수강 내역에서 예약한 강의 / 지난 강의를 분리하는 dataFetching selector
export const getLectureScheduleListSelector = selectorFamily({
  key: '/reservation/list',
  get:
    (info: { uri: string; type: 'next' | 'last' }) =>
    async ({ get }) => {
      const instanceAtk = await getInstanceATK();

      if (info.type === 'last') {
        console.log('run writeReview cache');
        get(WriteReviewCachingState);
      } else {
        console.log('run reservation cache');
        get(ReserveLectureCachingState);
      }

      try {
        const { data } = await instanceAtk.get(info.uri);

        if (!data.page.totalElements) return [];

        switch (info.type) {
          case 'next':
            return data._embedded.futureReservationUIModelList;
          case 'last':
            return data._embedded.pastReservationUIModelList;
        }
      } catch (error) {
        throw error;
      }
    },
});

// likeListType 조건에 따라 찜한 리스트 dataFetching selector
export const getLikeListSelector = selectorFamily({
  key: '/diff/post/like',
  get:
    (likeListType: 'community' | 'lecture') =>
    async ({ get }) => {
      const [uri, dataStoreName] =
        likeListType === 'community'
          ? ['/community/post/like?page=0&size=10', 'postsModelList']
          : ['/lecture/like/list?page=0&size=5', 'likeLectureInfoList'];

      get(liekCollectionRefreshState(likeListType));
      // console.log('caching');

      const instanceAtk = await getInstanceATK();

      try {
        const { data } = await instanceAtk.get(uri);

        if (!data.page.totalElements) return [];
        else return data._embedded[dataStoreName];
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
});

// 강사 신청 스크린에서 강사 신청 여부 판단 selector
export const getIsApplyInsctructorSelector = selector({
  key: '/account/instructor-application',
  get: async () => {
    const instanceAtk = await getInstanceATK();

    try {
      const {
        data: { applied },
      } = await instanceAtk.get('/account/instructor-application');

      return applied;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

// 강사 자신의 강의 후기 모아보기 list 받아오는 selector
export const getMyLectureListSelector = selector({
  key: '/lecture/manage/list',
  get: async () => {
    const instanceAtk = await getInstanceATK();

    try {
      const { data } = await instanceAtk.get(
        '/lecture/manage/list?page=0&size=5',
      );

      if (!data.page.totalElements) return [];

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

// 예약한 강의 상세 보기 정보 관련 selector
export const getReservationDetail = selectorFamily({
  key: '/reservation?reservationId=reservationId',
  get: (uri: string) => async () => {
    const instanceATK = await getInstanceATK();

    try {
      const { data } = await instanceATK.get(uri);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

// 예약한 강의 상세 보기 각각의 정보가 전부 받아지면 화면을 보이게 하기 위한 멀티 dataFetching selector
export const reserveDetailMultipleEval = selectorFamily({
  key: 'reserveDetailMultipleEval',
  get:
    (reservationId: number) =>
    ({ get }) => {
      const { info, location, schedule, equipment } = get(
        waitForAll({
          info: getReservationDetail(
            `/reservation?reservationId=${reservationId}`,
          ),
          location: getReservationDetail(
            `/reservation/location?reservationId=${reservationId}`,
          ),
          schedule: getReservationDetail(
            `/reservation/schedule?reservationId=${reservationId}`,
          ),
          equipment: getReservationDetail(
            `/reservation/equipment/list?reservationId=${reservationId}`,
          ),
        }),
      );

      return { info, location, schedule, equipment };
    },
});

// 수강생 작성한 리뷰 정보를 받아오는 selector
export const getAttendeeReviews = selector({
  key: '/review/mine',
  get: async ({ get }) => {
    get(AttendeeReviewListCachingState);
    const instanceATK = await getInstanceATK();

    try {
      const { data } = await instanceATK.get(
        '/review/mine?page=0&size=20&sort=writeDate,DESC',
      );

      if (!data.page.totalElements) {
        return {
          list: [],
          totalElements: data.page.totalElements,
        };
      }

      return {
        list: data._embedded.myReviewUIList,
        totalElements: data.page.totalElements,
      };
    } catch (error) {
      throw error;
    }
  },
});
