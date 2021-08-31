import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const ForgotPasswordScreenStyle = StyleSheet.create({
  container: {
    paddingLeft: 18,
    paddingRight: 19,
    fontSize: 16,
    backgroundColor: '#FEFEFE',
    flex: 1,
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
    left: 20,
    right: 20,
    // bottom: 40,
    top: HEIGHT * 0.7,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A6D70',
    paddingVertical: 10,
  },
  modalText: { fontSize: 16, color: '#fefefe' },
});
