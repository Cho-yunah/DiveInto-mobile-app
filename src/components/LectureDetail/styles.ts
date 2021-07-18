import { StyleSheet } from 'react-native';

const LecturePicsModal = StyleSheet.create({
  modalOuterContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  modalText: {
    color: '#fefefe',
  },
  modalCloseIcon: {
    position: 'absolute',
    zIndex: 1,
    right: 20,
    top: 50,
  },
});

export default LecturePicsModal;
