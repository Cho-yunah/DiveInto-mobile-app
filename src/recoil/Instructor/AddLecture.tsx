import { atom, atomFamily } from 'recoil';
import { Region, ClassKind, Organization, Level } from '@typing/common';
import { DocumentPickerResponse } from 'react-native-document-picker';

export const LectureImages = atom<DocumentPickerResponse[] | undefined>({
  key: 'AddLectrueImages',
  default: undefined,
});

export const RegionSelect = atom<Region | null>({
  key: 'RegionSelect',
  default: null,
});

export const ClassKindSelect = atom<ClassKind | null>({
  key: 'ClassKindSelect',
  default: null,
});

export const OrganaizationSelect = atom<Organization | null>({
  key: 'OrganaizationSelect',
  default: null,
});

export const LevelSelect = atom<Level | null>({
  key: 'LevelSelect',
  default: null,
});

export const LectureTitleInput = atom({
  key: 'LectureTitleInput',
  default: '',
});

export const LectureDescriptionInput = atom({
  key: 'LectureDescriptionInput',
  default: '',
});

export const LecturePriceInput = atom<number | undefined>({
  key: 'LecturePriceInput',
  default: undefined,
});

export const LectureMaxStdNumInput = atom<number | undefined>({
  key: 'LectureMaxStdNumInput',
  default: undefined,
});

export const LecturePeriodInput = atom<number | undefined>({
  key: 'LecturePeriodInput',
  default: 1,
});

export const LectureTimeInput = atom<string | undefined>({
  key: 'LectureTimeInput',
  default: undefined,
});

type EquipmentInfo = {
  name: string;
  price: number;
  equipmentStockInfos: {
    size: string; // L, M 이런거 적을 수도 있고, api 요청 시 문자열로 보내야하므로
    quantity: number;
  }[];
};

export const EquipmentList = atomFamily<EquipmentInfo, number>({
  key: 'AddLectureEquipmentList',
  default: {
    name: '',
    price: 0,
    equipmentStockInfos: [
      {
        size: '',
        quantity: 0,
      },
    ],
  },
});

// export const UploadedBucketList = selector({
//   key: 'UploadedBucketList',
//   get: ({ get }) => {
//     const list = [];
//     for (let i = 0; get(UploadedBucket(i)).bucket !== ''; i++) {
//       const s3info = get(UploadedBucket(i));
//       list.push(JSON.parse(s3info.toString()));
//     }

//     return list;
//   },
// });
