import { StyleSheet } from 'react-native';
import * as getDimenstion from '@config/windowDimention';

export const headerTextStyle = StyleSheet.create({
  container: {
    paddingVertical: getDimenstion.HEIGHT * 0.1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: getDimenstion.WIDTH * 0.6,
  },
  explanation: {
    fontSize: 14,
    marginTop: 16,
  },
});

export const emailInputStyle = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c1c2c3',
  },
  subContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    marginLeft: 3,
    fontSize: 12,
    color: '#c1c2c3',
  },
  emailInput: {
    paddingBottom: 8,
    fontSize: 16,
  },
  checkIcon: {
    paddingRight: 7.5,
  },
  guideTextValid: {
    color: '#38D1A8',
    fontSize: 12,
    width: getDimenstion.WIDTH * 0.6,
  },
  guideTextInvalid: {
    color: '#E93A55',
    fontSize: 12,
    width: getDimenstion.WIDTH * 0.6,
  },
  transitionPressable: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: getDimenstion.HEIGHT / 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getDimenstion.HEIGHT > 600 ? 14 : 12,
    borderColor: 'rgb(32, 122, 180)',
    // height: getDimenstion.HEIGHT > 600 ? getDimenstion.HEIGHT / 16 : 50,
  },
  buttonText: {
    fontSize: 18,
    color: 'rgb(32,122,180)',
  },
});

const styles = StyleSheet.create({
  transitionPressable: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderColor: 'rgb(32, 122, 180)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 200,
    height: 59,
    marginTop: 96,
  },
  explanation: {
    fontSize: 14,
    marginTop: 16,
  },
  checkIcon: { position: 'absolute', top: 265, right: 0 },
  middleContainer: {
    position: 'absolute',
    top: 300,
    right: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  emailInput: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    fontSize: 16,
    marginTop: 80,
    borderBottomColor: '#c1c2c3',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#c1c2c3',
  },
  buttonText: {
    fontSize: 18,
    color: 'rgb(32,122,180)',
  },
  socialLoginContainer: {
    marginTop: 70,
    borderColor: '#c1c2c3',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLoginTextWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  socialLoginText: {
    borderColor: '#c1c2c3',
    top: -10,
    textAlign: 'center',
    width: 80,
    backgroundColor: '#fefefe',
    color: '#c1c2c3',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 12,
  },
  iconText: { color: '#202020' },
  underlineText: {
    marginTop: 46,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  guideTextValid: { marginTop: 10, color: '#38D1A8', height: 15 },
  guideTextInvalid: { marginTop: 10, color: '#E93A55', height: 15 },
  checkboxContainer: {
    width: 20,
    height: 20,
  },
});

export default styles;
