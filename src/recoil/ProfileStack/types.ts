export type lectureReviewAllType = {
  id: number;
  instructorStar: number;
  lectureStar: number;
  locationStar: number;
  totalStarAvg: number;
  description: string;
  writeDate: Date;
  reviewImageUrls: string[];
};

export type reservationLectureListType = {
  reservationId: number;
  lectureTitle: string;
  organization: string;
  level: string;
  lectureImageUrl: string;
  instructorNickname: string;
  reservationDate: string;
  remainingDate: number;
};

export type instructorImageCollectionType = {
  size: number;
  uri: string;
  type: string;
  name: string;
};

export type deleteReasonStateType =
  | '원하는 정보가 존재하지 않아서'
  | '사용하기 불편해서'
  | '현재 사용하지 않는 앱이라서';

export type modifyNumViewStateAtomType = {
  phoneNumber: string;
  birth: string;
  gender: string;
};

export type reserveDetailListAtomType = {
  reservationId: number;
  dateOfReservation: string;
  numberOfPeople: number;
  paymentDetail:
    | {
        lectureCost: number;
        equipmentRentCost: number;
      }
    | undefined;
};

export type reserveLocationAtomType = {
  address: string;
  latitude: number;
  longitude: number;
};

export type reserveScheduleAtomType = {
  startTime: string;
  endTime: string;
  date: string;
}[];

export type reserveEquipmentsAtomType = {
  equipmentName: string;
  size: string;
  rentNumber: number;
}[];

export type reserveCostInfoTypesType = 'total' | 'lecture' | 'equipment';
