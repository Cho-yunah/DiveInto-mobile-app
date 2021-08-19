import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@config/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const CommonStyles = StyleSheet.create({
  listContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: Color.White,
    // backgroundColor: 'red',
    flexDirection: 'row',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },

  lastLectureContainer: {
    marginBottom: 12,
  },
});

export const TouchSwipeStyle = StyleSheet.create({
  deleteBottonContainer: {
    backgroundColor: Color.Selected,
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.25,
  },

  deleteBox: {
    alignItems: 'center',
    paddingLeft: 32,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 4,
    color: Color.White,
  },
});

export const lectureImgStyle = StyleSheet.create({
  imageElStyle: {
    width: SCREEN_WIDTH * 0.4,
    height: 108,
  },
});

export const nextLectureContentsStyle = StyleSheet.create({
  container: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Color.White,
    justifyContent: 'center',
    paddingLeft: 13,
  },
  commonLayout: {
    flexDirection: 'row',
  },
  largeTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.BlackText,
    lineHeight: 21,
  },
  mediumTextStyle: {
    fontSize: 12,
    color: '#535557',
    lineHeight: 20,
    paddingRight: 10,
  },
  smallTextStyle: {
    fontSize: 10,
    paddingBottom: 5,
  },
});

export const lastLectureContentsStyle = StyleSheet.create({
  container: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Color.White,
    justifyContent: 'center',
    paddingLeft: 13,
    width: SCREEN_WIDTH * 0.51,
    // borderWidth: 1,

    borderRadius: 10,
  },
  commonLayout: {
    flexDirection: 'row',
  },
  largeTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.BlackText,
    lineHeight: 21,
  },
  mediumTextStyle: {
    fontSize: 12,
    color: '#535557',
    lineHeight: 20,
    paddingRight: 10,
  },
  smallTextStyle: {
    fontSize: 10,
    paddingBottom: 5,
  },
});
