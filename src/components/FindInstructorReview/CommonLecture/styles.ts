import { StyleSheet, Platform } from 'react-native';
import * as Color from '@config/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.White,
    borderRadius: 10,
    marginBottom: 12,
  },
});

export const LectureImageStyle = StyleSheet.create({
  imageStyle: {
    width: 151,
    height: 108,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export const LectureContentsStyle = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginLeft: 16,
  },
  topViewlayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContentsStyle: {
    fontSize: 10,
    color: '#535557',
    lineHeight: 12,
    paddingLeft: 4,
  },
  middleViewLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    color: Color.BlackText,
    lineHeight: 21,
    paddingRight: 12,
  },
  subTitleStyle: {
    color: '#6A6D70',
    fontSize: 12,
    lineHeight: 20,
    paddingRight: 4,
  },
  bottomViewLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomTextStyle: {
    fontSize: 12,
    color: '#535557',
    paddingLeft: 4,
  },
  commonLayout: {
    marginBottom: 12,
  },
});
