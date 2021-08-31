import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    position: 'absolute',
    top: HEIGHT * 0.7,
    // bottom: 0.1 * HEIGHT,
    left: 20,
    right: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A6D70',
    paddingVertical: 10,
    opacity: 0.8,
  },

  modalText: { fontSize: 16, color: '#fefefe' },
});
