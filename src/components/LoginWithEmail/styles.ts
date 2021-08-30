import { StyleSheet, Platform } from 'react-native';
import * as Color from '@config/colors';
import * as getDimenstion from '@config/windowDimention';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c1c2c3',
    marginTop: getDimenstion.HEIGHT / 7,
  },
  TextInput: {
    paddingHorizontal: 0,
    paddingBottom: getDimenstion.HEIGHT > 600 ? 9 : 5,
  },
  TextInputIconContainer: {},
  TextInputIcons: {},
  transitionPressable: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: getDimenstion.HEIGHT / 2.55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getDimenstion.HEIGHT > 600 ? 14 : 12,
    borderColor: 'rgb(32, 122, 180)',
    height: getDimenstion.HEIGHT > 600 ? getDimenstion.HEIGHT / 16 : 50,
  },
  transitionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  underlineText: {
    paddingTop: getDimenstion.HEIGHT / 10,
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

// const styles = StyleSheet.create({
//   TextInput: {
//     marginTop: 121,
//     borderBottomWidth: 1,
//     borderBottomColor: '#c1c2c3',
//     paddingBottom: 8,
//   },
//   TextInputIconContainer: {
//     position: 'absolute',
//     top: 121,
//     right: 0,
//   },
//   TextInputIcons: {},
//   transitionPressable: {
//     borderWidth: 1,
//     borderRadius: 10,
//     marginTop: 336,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 14,
//     borderColor: 'rgb(32, 122, 180)',
//     height: 50,
//   },
//   transitionText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   underlineText: {
//     fontSize: 14,
//     textAlign: 'center',
//     textDecorationLine: 'underline',
//   },
// });

export default styles;
