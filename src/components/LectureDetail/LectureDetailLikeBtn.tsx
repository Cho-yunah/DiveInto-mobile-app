import { getInstanceATK } from '@/src/lib/api/axios';
import { liekCollectionRefreshState } from '@/src/recoil/Global';
import {
  lectureIdState,
  smallModalMessageState,
} from '@/src/recoil/LectureStack';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const LectureDetailLikeBtn = () => {
  const [isLike, setIsLike] = useState<null | boolean>(null);
  const lectureId = useRecoilValue(lectureIdState);
  const setSmallModalMessage = useSetRecoilState(smallModalMessageState);
  // 찜 모아보기 데이터 업데이트 관련 상태 업로드
  const setLecutreRefresh = useSetRecoilState(
    liekCollectionRefreshState('lecture'),
  );

  const requestLikeOrUnlike = async (isLike: boolean) => {
    const url = isLike ? `/lecture/unlike` : `/lecture/like`;
    const body = { lectureId };
    const config = {
      data: { lectureId },
    };

    try {
      const instanceATK = await getInstanceATK();

      isLike
        ? await instanceATK.delete(url, config)
        : await instanceATK.post(url, body);

      setSmallModalMessage(
        isLike ? '강의 찜하기 취소 했습니다.' : '강의 찜하기 완료 했습니다.!',
      );
      setIsLike(isLike => !isLike);
      setLecutreRefresh(prevRefresh => prevRefresh + 1);
    } catch (e) {
      console.log(e?.response?.data);
      setSmallModalMessage(e?.response?.data?.msg || '찜하기 실패하였습니다.');
    }
  };

  useEffect(() => {
    const requestIsLike = async (lectureId: number | null) => {
      if (!lectureId) return;

      try {
        const instanceATK = await getInstanceATK();
        const { data }: AxiosResponse = await instanceATK.get(
          `/lecture/${lectureId}/like`,
        );
        console.log(data);

        setIsLike(data?.marked);
      } catch (e) {
        console.log(e?.response?.data);
      }
    };

    requestIsLike(lectureId);
  }, [lectureId]);

  if (isLike === null) return null;

  return (
    <Pressable
      style={{
        marginRight: 10,
      }}
      onPress={() => requestLikeOrUnlike(isLike!)}
    >
      <Entype
        name={'heart'}
        size={24}
        color={isLike! ? '#E93A55' : '#E0E0E1'}
      />
    </Pressable>
  );
};

export default LectureDetailLikeBtn;
