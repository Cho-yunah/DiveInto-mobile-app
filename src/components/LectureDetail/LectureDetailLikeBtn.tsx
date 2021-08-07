import { getInstanceATK } from '@/src/lib/api/axios';
import {
  lectureCommonSelectorFamily,
  lectureIdState,
  smallModalMessageState,
} from '@/src/recoil/LectureStack';
import React, { useRef, useState } from 'react';
import { Pressable } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import { useRecoilState, useRecoilValue } from 'recoil';

const LectureDetailLikeBtn = () => {
  const { isMarked } = useRecoilValue(lectureCommonSelectorFamily('Info'));
  const [like, setLike] = useState(isMarked ? true : false);
  const lectureId = useRecoilValue(lectureIdState);
  const [smallModalMessage, setSmallModalMessage] = useRecoilState(
    smallModalMessageState,
  );
  const requestLikeOrUnlike = async (isMarked: boolean) => {
    const url = isMarked ? `/lecture/unlike` : `/lecture/like`;
    const body = { lectureId };

    const instanceATK = await getInstanceATK();

    try {
      await instanceATK.post(url, body);
      setSmallModalMessage(
        isMarked
          ? '강의를 찜하였습니다. 찜하기 목록에서 확인 가능합니다.'
          : '강의 찜하기를 취소하였습니다.',
      );
    } catch (e) {
      console.log(e.response.data);
      setSmallModalMessage(e?.response?.data?.msg || '찜하기 실패하였습니다.');
    }
  };
  console.log(isMarked);
  console.log(like);

  return (
    <Pressable
      style={{
        marginRight: 10,
      }}
      onPress={() => requestLikeOrUnlike(isMarked)}
    >
      <Entype
        name={'heart'}
        size={24}
        color={isMarked ? '#E93A55' : '#E0E0E1'}
      />
    </Pressable>
  );
};

export default LectureDetailLikeBtn;
