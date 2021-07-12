import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ReviewListStyles as styles } from './styles';

type ReserveBtnProps = {
  navigateToReserveLecture: () => void;
};

const ReserveBtn = ({ navigateToReserveLecture }: ReserveBtnProps) => {
  return (
    <View style={styles.reserveBtnContainer}>
      <Pressable
        style={styles.reserveBtn}
        onPress={() => navigateToReserveLecture()}
      >
        <Text style={styles.reserveBtnText}>강의 예약하기</Text>
      </Pressable>
    </View>
  );
};

export default ReserveBtn;
