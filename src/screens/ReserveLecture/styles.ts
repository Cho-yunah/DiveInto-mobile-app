import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

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
    zIndex: 1,
  },
  modalContainer: {
    zIndex: 0,
    position: 'absolute',
    top: HEIGHT * 0.8,
    // bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A6D70',
    paddingVertical: 10,
  },
  modalText: { fontSize: 16, color: '#fefefe' },
});

export default styles;
