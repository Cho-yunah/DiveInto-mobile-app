import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { phoneNumber as styles } from './styles';
import { PhoneNuberInfoProps } from '../types';
import CommonModal from '@components/common/CommonModal';
import { useRecoilValue } from 'recoil';
import { phoneState } from '@/src/recoil/ProfileStack';

export default function PhoneNumberInfo({ phone }: PhoneNuberInfoProps) {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const tempPhone = useRecoilValue(phoneState);

  console.log(tempPhone);

  const autoMasking = (): string => phone.replace(/\d{3}$/, '***');

  const toggleShowModal = (): void => {
    setShow(!show);
  };

  const moveChangeNumberScreen = (): void => {
    setShow(false);
    navigation.navigate('ModifyNum');
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.layoutContainer}>
        <Text style={styles.phoneText}>{autoMasking()}</Text>
        <TouchableOpacity onPress={toggleShowModal}>
          <View style={styles.modifyPhoneButtonContainer}>
            <Text style={styles.modifyPhoneButtonText}>변경</Text>
          </View>
        </TouchableOpacity>
      </View>

      <CommonModal
        show={show}
        desc="휴대폰 번호를 변경하시겠습니까?"
        toggleShowModal={toggleShowModal}
        onClickConfirm={moveChangeNumberScreen}
      />
    </View>
  );
}
