import { atom, atomFamily, selector } from 'recoil';
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
    quantity: number | '';
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
        quantity: '',
      },
    ],
  },
});

export const EquipmentListAll = selector({
  key: 'AddLectureEquipmentListAll',
  get: ({ get }) => {
    const list = [];
    for (let i = 0; get(EquipmentList(i)).name !== ''; i++) {
      const equip = get(EquipmentList(i));
      list.push(equip);
    }

    return list;
  },
});

type Location = {
  latitude: number;
  longitude: number;
};
export const LectureGeoLocation = atom<Location | undefined>({
  key: 'AddLectureLocation',
  default: undefined,
});

export const LectureRoadAddress = atom({
  key: 'AddLectureRoadAddress',
  default: '',
});

export const LectureLocationAlias = atom({
  key: 'AddLectureLocationAlias',
  default: '',
});
