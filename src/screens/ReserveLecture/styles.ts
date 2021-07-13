import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F7',
  },
  modalOuterContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  modalContainer: {
    position: 'absolute',
    height: 40,
    top: 650,
    left: 20,
    right: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A6D70',
  },
  modalText: { fontSize: 16, color: '#fefefe' },
});

export default styles;
