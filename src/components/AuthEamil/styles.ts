import { StyleSheet } from 'react-native';
import * as Color from '@/src/config/colors';
import NaverMap from '@/src/legacy/Containers/common/NaverMap';

export const HeaderText = StyleSheet.create({
  container: {
    paddingBottom: 60,
    width: 260,
  },
  title: {
    fontSize: 24,
    color: Color.BasicText,
    lineHeight: 30,
  },
  desc: {
    fontSize: 14,
    color: '#535557',
    lineHeight: 21,
  },
});

export const inputStyles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#A9BBC9',
    paddingBottom: 9,
    flexDirection: 'row',
  },
  lastInputLayout: {
    paddingTop: 60,
  },
  commonText: {
    flex: 1,
    fontSize: 16,
    color: Color.BasicText,
  },
  button: { alignItems: 'flex-end' },
  buttonText: { color: '#CCD7DF', fontSize: 14 },
  activeButton: {
    color: Color.deepBlue,
  },
  vaildationdText: {
    color: '#E93A55',
    fontSize: 12,
    paddingTop: 10,
  },
});

export const ErrorMessage = StyleSheet.create({
  errorText: {
    color: Color.Selected,
    fontSize: 12,
    paddingTop: 8,
  },
});
