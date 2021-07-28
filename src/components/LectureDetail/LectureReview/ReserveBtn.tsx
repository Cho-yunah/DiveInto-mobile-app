import { lectureCommonSelectorFamily } from '@/src/recoil/LectureStack';
import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { useRecoilValueLoadable } from 'recoil';
import { ReviewListStyles as styles } from './styles';

type ReserveBtnProps = {
  navigateToReserveLecture: () => void;
};

const ReserveBtn = ({ navigateToReserveLecture }: ReserveBtnProps) => {
  const { state, contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('Info'),
  );

  return (
    <View style={styles.reserveBtnContainer}>
      <Pressable
        style={styles.reserveBtn}
        onPress={() => navigateToReserveLecture()}
        disabled={!contents?.title}
      >
        {state === 'hasValue' ? (
          <Text style={styles.reserveBtnText}>강의 예약하기</Text>
        ) : (
          <ActivityIndicator size="small" color="#fefefe" />
        )}
      </Pressable>
    </View>
  );
};

export default ReserveBtn;
