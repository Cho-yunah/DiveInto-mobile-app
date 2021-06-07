import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { phoneNumber as styles } from './styles';
import { PhoneNuberInfoProps } from '../types';

export default function PhoneNumberInfo({ phone }: PhoneNuberInfoProps) {
  const navigation = useNavigation();

  const autoMasking = (): string =>
    phone
      .replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3')
      .replace(/\d{3}$/, '***');

  const moveModifyPhoneModal = (): void => {
    // useNavigaion ...
    console.log('move modify phone screen');
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.layoutContainer}>
        <Text style={styles.phoneText}>{autoMasking()}</Text>
        <TouchableOpacity onPress={moveModifyPhoneModal}>
          <View style={styles.modifyPhoneButtonContainer}>
            <Text style={styles.modifyPhoneButtonText}>변경</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
