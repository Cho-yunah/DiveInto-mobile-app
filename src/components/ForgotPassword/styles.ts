import { StyleSheet } from 'react-native';
import * as getDimension from '@config/windowDimention';

export const GuideTextStyle = StyleSheet.create({
  container: { marginTop: getDimension.HEIGHT / 10 },
  BigText: {
    fontSize: getDimension.HEIGHT > 600 ? 25 : 23,
    maxWidth: getDimension.WIDTH * 0.7,
    color: '#202020',
  },
  midText: { marginTop: 20, fontSize: 17, color: '#6A6D70' },
});
export const AuthenticationCodeAreaStyle = StyleSheet.create({
  container: {
    marginTop:
      getDimension.HEIGHT > 600
        ? getDimension.HEIGHT / 8
        : getDimension.HEIGHT / 12,
    minHeight: 100,
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  emailText: {
    color: '#6A6D70',
    fontSize: 16,
  },
  RequestCodeBtn: {},
  RequestCodeBtnText: {
    color: '#207AB4',
    fontSize: 16,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  codeInput: {
    minWidth: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 15,
  },
});
export const NewPasswordAreaStyle = StyleSheet.create({
  codeInputContainer: {
    paddingBottom: 4,
  },
  codeInput: {
    padding: 0,

    // marginTop: 30,
    // paddingBottom: 5,
    // minWidth: 200,
    // backgroundColor: 'red',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  PWInputContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  eyeIcon: {
    // position: 'absolute',
    // top: 30,
    // right: 0,
  },
});

export const ChangePwBtnStyle = StyleSheet.create({
  container: { marginRight: 10 },
  btnText: { fontSize: 16, color: '#6A6D70' },
});

// export const GuideTextStyle = StyleSheet.create({
//   container: { marginTop: 40 },
//   BigText: { fontSize: 25, maxWidth: 270, color: '#202020' },
//   midText: { marginTop: 20, fontSize: 17, color: '#6A6D70' },
// });
// export const AuthenticationCodeAreaStyle = StyleSheet.create({
//   container: { marginTop: 80, minHeight: 100 },
//   emailContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomColor: '#D8D8D8',
//     borderBottomWidth: 1,
//     paddingBottom: 4,
//   },
//   emailText: {
//     color: '#6A6D70',
//     fontSize: 16,
//   },
//   RequestCodeBtn: {},
//   RequestCodeBtnText: {
//     color: '#207AB4',
//     fontSize: 16,
//   },
//   codeInputContainer: {
//     paddingBottom: 4,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 30,
//     borderBottomColor: '#D8D8D8',
//     borderBottomWidth: 1,
//   },
//   codeInput: {
//     minWidth: 200,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });
// export const NewPasswordAreaStyle = StyleSheet.create({
//   codeInputContainer: {
//     paddingBottom: 4,
//   },
//   codeInput: {
//     marginTop: 30,
//     paddingBottom: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#D8D8D8',
//     minWidth: 200,
//     // backgroundColor: 'red',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   PWInputContainer: {},
//   eyeIcon: {
//     position: 'absolute',
//     top: 30,
//     right: 0,
//   },
// });

// export const ChangePwBtnStyle = StyleSheet.create({
//   container: { marginRight: 10 },
//   btnText: { fontSize: 16, color: '#6A6D70' },
// });
