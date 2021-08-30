import { atom, atomFamily } from 'recoil';

import {
  Organization,
  Level,
  Region,
  CostCondition,
  ClassKind,
} from '@typing/common';

export const FilterOrganization = atom<Organization | undefined>({
  key: 'FilterSearch/Organization',
  default: undefined,
});

export const FilterLevel = atom<Level>({
  key: 'FilterSearch/Level',
  default: 'level1',
});

export const FilterRegion = atom<Region>({
  key: 'FilterSearch/Region',
  default: '서울',
});

export const FilterCostCondition = atom<CostCondition | undefined>({
  key: 'FilterSearch/CostCondition ',
  default: undefined,
});
