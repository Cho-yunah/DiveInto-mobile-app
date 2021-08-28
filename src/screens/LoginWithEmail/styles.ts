import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    fontSize: 16,
    backgroundColor: Color.White,
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
    top: 650,
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

// const styles = StyleSheet.create({
//   container: {
//     paddingLeft: 18,
//     paddingRight: 19,
//     fontSize: 16,
//     backgroundColor: Color.White,
//     flex: 1,
//   },
//   modalOuterContainer: {
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     position: 'absolute',
//     backgroundColor: 'transparent',
//   },
//   modalContainer: {
//     position: 'absolute',
//     top: 650,
//     left: 20,
//     right: 20,
//     borderRadius: 20,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#6A6D70',
//     paddingVertical: 10,
//   },
//   modalText: { fontSize: 16, color: '#fefefe' },
// });

export default styles;
//
