import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CancelBtnStyles as styles } from './styles';
import { getInstanceATK } from '@/src/lib/api/axios';

function CancelBtn({ reservationId }: { reservationId: number }) {
  const navigation = useNavigation();

  const onDeleteNextLecture = useCallback(() => {
    const requestReserveCancel = async () => {
      console.log(reservationId);

      const instanceAtk = await getInstanceATK();

      try {
        const res = await instanceAtk.delete(`/reservation/${reservationId}`);

        navigation.goBack();

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    requestReserveCancel();
    console.log('예약한 강의 취소');
  }, [reservationId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>예약취소</Text>
      <Text style={styles.cancelNotice}>
        수강 일자로부터 2일 전까지만 취소할 수 있습니다.
      </Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onDeleteNextLecture}
      >
        <Text style={styles.btnText}>예약취소</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CancelBtn;
