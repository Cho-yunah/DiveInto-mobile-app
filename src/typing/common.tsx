export type Organization = 'AIDA' | 'PADI' | 'SSI';
export type Level = 'level1' | 'level2' | 'level3' | 'level4' | 'level5';
export type Region =
  | '서울'
  | '경기'
  | '인천'
  | '부산'
  | '경상, 대구, 울산'
  | '대전, 충청'
  | '강원'
  | '광주, 전라, 제주'
  | '온라인';
export type CostCondition = {
  max: number;
  min: number;
};
export type ClassKind = '프리다이빙' | '스쿠버 다이빙';
