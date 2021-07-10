import React from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { commonModal as styles, outputMode as outputStyles } from './styles';
import { CommonModalProps } from './types';

const CommonModal = ({
  show,
  mode,
  desc,
  toggleShowModal,
  onClickConfirm,
}: CommonModalProps) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={show}
      supportedOrientations={['portrait']}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View
          style={[
            styles.modalContentsContainer,
            mode === 'output' && outputStyles.modalContentsContainer,
          ]}
        >
          <Text
            style={[
              styles.contentsText,
              mode === 'output' && outputStyles.contentsText,
            ]}
          >
            {desc}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={toggleShowModal}
              style={styles.buttonLayout}
            >
              <Text
                style={[
                  styles.cancelButtonText,
                  mode === 'output' && outputStyles.cancelButtonText,
                ]}
              >
                취소
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClickConfirm}
              style={styles.buttonLayout}
            >
              <Text
                style={[
                  styles.confirmButtonText,
                  mode === 'output' && outputStyles.confirmButtonText,
                ]}
              >
                확인
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CommonModal;
