import { lectureDetailState } from '@/src/recoil/LectureStack';
import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { ReviewListStyles as styles } from './styles';

type ReserveBtnProps = {
  navigateToReserveLecture: () => void;
};

const ReserveBtn = ({ navigateToReserveLecture }: ReserveBtnProps) => {
  const lectureDetail = useRecoilValue(lectureDetailState);

  return (
    <View style={styles.reserveBtnContainer}>
      <Pressable
        style={styles.reserveBtn}
        onPress={() => navigateToReserveLecture()}
        disabled={!lectureDetail.title}
      >
        {lectureDetail.title ? (
          <Text style={styles.reserveBtnText}>강의 예약하기</Text>
        ) : (
          <ActivityIndicator size="small" color="#fefefe" />
        )}
      </Pressable>
    </View>
  );
};

export default ReserveBtn;
