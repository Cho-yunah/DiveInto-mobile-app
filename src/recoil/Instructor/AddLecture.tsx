import { atom } from 'recoil';
import { Region, ClassKind, Organization, Level } from '@typing/common';
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
