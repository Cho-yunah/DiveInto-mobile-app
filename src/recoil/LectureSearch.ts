import { atom } from 'recoil';
import { Organization, Region, Level, CostCondition } from '@typing/common';

export const FilterOrganization = atom<{
  organization: Organization;
  id: number;
}>({
  key: 'FilterSearchOrganization',
  default: {
    organization: 'AIDA',
    id: 0,
  },
});

export const FilterRegion = atom<{ region: Region; id: number }>({
  key: 'FilterSearchRegion',
  default: { region: '서울', id: 0 },
});

export const FilterLevel = atom<{ level: Level; id: number }>({
  key: 'FilterSearchLevel',
  default: { level: 'level1', id: 0 },
});

export const FilterCostCondition = atom<CostCondition>({
  key: 'FilterSearchCostCondition',
  default: { max: 0, min: 0 },
});
