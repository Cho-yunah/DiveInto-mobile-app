import { StyleSheet, Platform } from 'react-native';
import * as Color from '@/src/config/colors';
import * as getDimension from '@config/windowDimention';
import NaverMap from '@/src/legacy/Containers/common/NaverMap';

export const HeaderText = StyleSheet.create({
  container: {
    paddingTop: getDimension.HEIGHT / 10,
  },
  eachContainer: {
    paddingBottom: getDimension.HEIGHT / 15,
    width:
      getDimension.WIDTH > 370
        ? getDimension.WIDTH * 0.65
        : getDimension.WIDTH * 0.75,
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
    borderBottomColor: Color.underLine,
    paddingBottom: Platform.OS === 'ios' ? 9 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastInputLayout: {
    paddingTop: getDimension.HEIGHT / 15,
  },
  emailText: {
    fontSize: 16,
    color: Color.BasicText,
    paddingBottom: 5,
    width: getDimension.WIDTH * 0.6,
  },
  inputText: {
    padding: 0,
    color: Color.BasicText,
  },
  button: {
    alignItems: 'flex-end',
  },
  buttonText: {
    color: '#CCD7DF',
    fontSize: 14,
  },
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
