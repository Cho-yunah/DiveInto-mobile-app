import { selector, selectorFamily } from 'recoil';

import { reservationLectureListType } from './types';
import { getInstanceATK } from '@lib/api/axios';
import { PhoneNumState, ReserveLectureCachingState } from './store';
import { liekCollectionRefreshState } from '../Global';

// ProfileMainScreen에서 기본 사용자 정보를 받는 dataFetching selector
export const requestUserInfoSelector = selector({
  key: '/account',
  get: async ({ get }) => {
    const instanceAtk = await getInstanceATK();

    try {
      const { data } = await instanceAtk.get('/account');

      return data;
    } catch (err) {
      console.log(err);
    }
  },
});

// 수강 내역에서 예약한 강의 / 지난 강의를 분리하는 dataFetching selector
export const getLectureScheduleListSelector = selectorFamily({
  key: 'requestLectureScheduleList',
  get:
    (scheduleType: 'next' | 'last') =>
    async ({ get }) => {
      get(ReserveLectureCachingState);
      const instanceAtk = await getInstanceATK();

      try {
        console.log('Rerendering');

        const { data } = await instanceAtk.get(
          '/reservation/list?page=0&size=15&sort=dateOfReservation,DESC',
        );

        if (!data.page.totalElements) return [];

        const schedule = data._embedded.reservationInfoList;

        switch (scheduleType) {
          case 'next':
            return schedule.filter(
              (data: reservationLectureListType) => data.remainingDate !== 365,
            );
          case 'last':
            return schedule.filter(
              (data: reservationLectureListType) => data.remainingDate === 365,
            );
        }
      } catch (err) {
        console.log(err);
      }
    },
});

// likeListType 조건에 따라 찜한 리스트 dataFetching selector
export const getLikeListSelector = selectorFamily({
  key: 'requestLikeList',
  get:
    (likeListType: 'community' | 'lecture') =>
    async ({ get }) => {
      const [uri, dataStoreName] =
        likeListType === 'community'
          ? ['/community/post/like?page=0&size=10', 'postsModelList']
          : ['/lecture/like/list?page=0&size=5', 'likeLectureInfoList'];

      get(liekCollectionRefreshState(likeListType));
      const instanceAtk = await getInstanceATK();

      try {
        const { data } = await instanceAtk.get(uri);

        if (!data.page.totalElements) return [];
        else return data._embedded[dataStoreName];
      } catch (err) {
        console.log(err);
      }
    },
});
