import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CancelBtnStyles as styles } from './styles';
import { getInstanceATK } from '@/src/lib/api/axios';
import { useRecoilCallback } from 'recoil';
import { ReserveLectureCachingState } from '@recoil/ProfileStack/store';
import useAutoCloseModal from '@/src/lib/hooks/useAutoCloseModal';

function CancelBtn({ reservationId }: { reservationId: number }) {
  const navigation = useNavigation();
  const { showModal } = useAutoCloseModal('detailReservation');
  const onDeleteNextLecture = useRecoilCallback(({ set }) => async () => {
    const instanceAtk = await getInstanceATK();

    try {
      await instanceAtk.delete(`/reservation/${reservationId}`);
      set(ReserveLectureCachingState, prev => prev + 1);
      showModal('예약한 강의롤 취소하였습니다.!');
      navigation.goBack();
    } catch (err) {
      showModal('결제를 취소를 실패했습니다. 다시 시도해주세요!');
      console.log(err.response);
    }
  });

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
