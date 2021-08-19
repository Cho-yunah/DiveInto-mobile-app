import { autoCloseModalState } from '@/src/recoil/Global';
import React from 'react';
import { useRecoilState } from 'recoil';

type UseAutoCloseModalProps =
  | 'detailReservation'
  | 'cummnityLike'
  | 'lectureLike';

export default function useAutoCloseModal(callerName: UseAutoCloseModalProps) {
  const [visibleShow, setVisibleShow] = useRecoilState(
    autoCloseModalState(callerName),
  );

  const showModal = (text: string) => {
    setVisibleShow(text);

    setTimeout(() => {
      setVisibleShow('');
    }, 1200);
  };

  return { visibleShow, showModal };
}
