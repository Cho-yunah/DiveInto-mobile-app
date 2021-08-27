import { selector, selectorFamily } from 'recoil';

import { reserveCostInfoTypesType } from './types';
import theSameNameOfNumber from '@lib/utils/duplicateEquipment';
import { sliceDateString, sliceTimeString } from '@lib/utils/sliceNewString';
import {
  deletePasswordState,
  deleteReasonState,
  etcDeleteReasonState,
  reserveDetailListState,
  reserveEquipmentsState,
  reserveScheduleState,
} from './store';

// 가격 타입 param에 따라서 가격 결과를 보내주는 셀렉터
export const totalCostSelector = selectorFamily({
  key: 'profile/totalCost',
  get:
    (costType: reserveCostInfoTypesType) =>
    ({ get }) => {
      const paymentDetail = get(reserveDetailListState)?.paymentDetail;

      if (!paymentDetail) return 0;

      switch (costType) {
        case 'total':
          return paymentDetail?.equipmentRentCost + paymentDetail?.lectureCost;
        case 'lecture':
          return paymentDetail?.lectureCost;
        case 'equipment':
          return paymentDetail.equipmentRentCost;
        default:
          return 0;
      }
    },
});

// 회원 탈퇴 전에 작성해야 하는 조건 selector
export const deleteUserConditionSelector = selector({
  key: 'profile/deleteUserCondition',
  get: ({ get }) => {
    const password = get(deletePasswordState);
    const selectOption = get(deleteReasonState);
    const etcOption = get(etcDeleteReasonState);

    if ((etcOption || selectOption) && password) {
      return true;
    } else {
      return false;
    }
  },
});

// 같은 목록이면서 같은 사이즈 장비 수량 합을 구하는 셀렉터
export const sumOfTheSameListSelector = selector({
  key: 'profile/sumOfSameList',
  get: ({ get }) => {
    const equipmentList = get(reserveEquipmentsState);

    if (!equipmentList.length) return [];

    console.log(theSameNameOfNumber(equipmentList));

    return theSameNameOfNumber(equipmentList);
  },
});

// 강의 일정 관련 데이터 문자열 새로운 조합으로 바꾸는 셀렉터
export const dateOrTimeOfNewStringSelector = selector({
  key: 'profile/dateOrTimeOfNewString',
  get: ({ get }) => {
    const schedules = get(reserveScheduleState);

    if (!schedules.length) return [];

    const scheduleNewString = schedules.map(schedule => {
      const startTime = sliceTimeString(schedule.startTime);
      const endTime = sliceTimeString(schedule.endTime);
      const date = sliceDateString(schedule.date, 'yy.M.dd (E)');

      return { date, startTime, endTime };
    });

    return scheduleNewString;
  },
});
