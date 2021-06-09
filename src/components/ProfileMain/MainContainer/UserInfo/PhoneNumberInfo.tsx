import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  phoneNumber as styles,
  changePhoneModalStyle as modalStyle,
} from './styles';
import { PhoneNuberInfoProps } from '../types';

const ChangePhoneModal = ({
  show,
  toggleShowModal,
}: {
  show: boolean;
  toggleShowModal: () => void;
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={show}
      supportedOrientations={['portrait']}
    >
      <SafeAreaView style={modalStyle.modalContainer}>
        <View style={modalStyle.modalContentstsContainer}>
          <Text style={modalStyle.contentsText}>
            휴대폰 번호를 변경하시겠습니까?
          </Text>
          <View style={modalStyle.buttonContainer}>
            <TouchableOpacity
              onPress={toggleShowModal}
              style={modalStyle.buttonLayout}
            >
              <Text style={modalStyle.cancelButtonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.buttonLayout}>
              <Text style={modalStyle.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default function PhoneNumberInfo({ phone }: PhoneNuberInfoProps) {
  const navigation = useNavigation();
  const [show, setShow] = useState<boolean>(false);

  const autoMasking = (): string =>
    phone
      .replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3')
      .replace(/\d{3}$/, '***');

  const toggleShowModal = (): void => {
    setShow(!show);
    console.log('move modify phone screen');
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

      <ChangePhoneModal show={show} toggleShowModal={toggleShowModal} />
    </View>
  );
}
