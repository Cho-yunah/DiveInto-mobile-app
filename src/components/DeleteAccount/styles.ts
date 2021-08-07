import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@config/colors';

export const deleteInfoStyle = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  contentText: {
    color: Color.BlackText,
    lineHeight: 21,
    marginBottom: 8,
  },
});

export const deleteReasonStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.underLine,
    zIndex: 2,
    marginBottom: 40,
  },
  etcReasonInput: {
    borderTopWidth: 1,
    borderColor: Color.underLine,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export const confirmPWStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.underLine,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passwordText: {
    paddingBottom: 9,
    width: Dimensions.get('window').width * 0.7,
  },
});

export const deleteCompleteBtnStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: Color.deepBlue,
    backgroundColor: Color.deepBlue,
  },
  noneValidStyle: {
    backgroundColor: Color.White,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.White,
  },
  noneValidText: {
    color: Color.deepBlue,
  },
});
