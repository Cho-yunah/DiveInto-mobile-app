import React from 'react';
import { View, Text, Modal } from 'react-native';

import { styles } from './styles';
import { AutoCloseAlertModalProps } from './types';
import useAutoCloseModal from '@lib/hooks/useAutoCloseModal';

export default function AutoCloseAlertModal({
  callerName,
}: AutoCloseAlertModalProps) {
  const { visibleShow } = useAutoCloseModal(callerName);

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={!!visibleShow}>
        <View style={styles.container}>
          <Text style={styles.modalText}>{visibleShow}</Text>
        </View>
      </Modal>
    </View>
  );
}
