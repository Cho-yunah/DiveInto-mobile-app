import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ReviewListStyles as styles } from './styles';

const ReserveBtn = () => {
  return (
    <View style={styles.reserveBtnContainer}>
      <Pressable style={styles.reserveBtn} onPress={() => {}}>
        <Text style={styles.reserveBtnText}>강의 예약하기</Text>
      </Pressable>
    </View>
  );
};

export default ReserveBtn;
