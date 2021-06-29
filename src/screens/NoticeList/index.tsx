import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import { NoticeListItem } from '@/src/components/NoticeBoard';

const mockupData = [
  {
    id: 1,
    title: '풍덩 위치 기반 서비스 이용약관 개정 안내',
    date: '2021.06.08',
  },
  {
    id: 2,
    title: '풍덩 앱 하위버전 (1.0.0 미만) 지원 종료예정 안내',
    date: '2021.05.16',
  },
  {
    id: 3,
    title: '풍덩 통합 멤버십 정책 개정 안내',
    date: '2021.05.05',
  },
  {
    id: 4,
    title: '풍덩 iOS 최소지원 버전 변경 안내',
    date: '2021.05.03',
  },
  {
    id: 5,
    title: '풍덩 이용약관 일부 변경 공지',
    date: '2021.05.01',
  },
  {
    id: 6,
    title: '풍덩 시스템 정상화 안내',
    date: '2021.04.14',
  },
  {
    id: 7,
    title: '풍덩 결제 시스템 장애 안내',
    date: '2021.04.07',
  },
  {
    id: 8,
    title: '개인정보처리방침 일부 변경 안내',
    date: '2021.03.21',
  },
  {
    id: 9,
    title: '불량 강사 신고 방법 안내',
    date: '2021.03.16',
  },
  {
    id: 10,
    title: '풍덩 시스템 점검에 따른 이용 제한 안내',
    date: '2021.02.02',
  },
  {
    id: 11,
    title: '풍덩 계정 사칭 주의 안내',
    date: '2021.01.31',
  },
  {
    id: 12,
    title: '얏호~서비스 오픈!',
    date: '2021.01.20',
  },
];

export default function NoticeListScreen() {
  return (
    <FlatList
      data={mockupData}
      renderItem={({ item }) => (
        <NoticeListItem title={item.title} date={item.date} key={item.id} />
      )}
    />
  );
}
