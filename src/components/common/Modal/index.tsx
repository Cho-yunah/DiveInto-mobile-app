import React, { ReactElement } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import IconButton from '@components/common/IconButton';
import { PointBlue, deepBlue } from '@config/colors';

export default function CommonModal({
  visible = false,
  onClose = () => {},
  title = 'test',
  children,
  animation = 'pulse',
}: {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactElement;
  animation?: Animatable.Animation;
}) {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.rootModalContainer}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Animatable.View animation={animation} style={styles.modalView}>
              <View style={styles.modalTitleContainer}>
                <Text style={styles.modalTitle}>{title}</Text>
                <IconButton
                  name="close"
                  size={35}
                  color="white"
                  onPress={onClose}
                />
              </View>
              <View style={styles.center}>{children}</View>
            </Animatable.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // 최상위 모달 컨테이너
  rootModalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  // 팝업될 모달 스타일
  modalView: {
    // flex: 1,
    // height: '70%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 15,
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  // 모달 타이틀
  modalTitle: {
    textAlign: 'center',
    flex: 1,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '600',
    padding: 15,
    color: 'white',
  },
  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 5,
    backgroundColor: PointBlue,
  },
  textNotice: { padding: 1, paddingLeft: 10, color: 'grey' },
  errorContainer: { alignItems: 'center', paddingTop: 10 },
  textError: { color: 'red', justifyContent: 'center' },
  bold: { fontWeight: 'bold' },
  fontRed: { color: 'red' },
  center: { justifyContent: 'center', alignItems: 'center' },
});
