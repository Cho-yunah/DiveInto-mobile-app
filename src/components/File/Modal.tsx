import React from 'react';
import { Modal, TouchableWithoutFeedback, View, Text } from 'react-native';
import { modalStyles } from './styles';
import { ProgressModalProps } from './types';

export default function ProgressModal({
  visible,
  onRequestClose,
  preventParentEvent,
  children,
}: ProgressModalProps) {
  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={modalStyles.modalContainer}>
          <TouchableWithoutFeedback onPress={preventParentEvent}>
            {children}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
