import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

import { underLine } from '../../styles';

export const phoneNumber = StyleSheet.create({
  rootContainer: {
    height: 65,
  },
  layoutContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: underLine.borderBottomWidth,
    borderBottomColor: underLine.borderBottomColor,
  },
  phoneText: {
    fontSize: 14,
    color: Color.BlackText,
  },
  modifyPhoneButtonContainer: {
    flex: 1,
    width: 70,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modifyPhoneButtonText: {
    color: Color.deepBlue,
    fontSize: 12,
    borderWidth: 1,
    borderColor: Color.deepBlue,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 10,
  },
});

export const etcUserInfo = StyleSheet.create({
  container: {
    marginVertical: 32,
  },
  nicknameText: {
    fontSize: 18,
    color: Color.BlackText,
  },
  emailText: {
    paddingTop: 4,
    fontSize: 12,
    color: '#202020',
  },
});
