import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';
import * as getDimension from '@config/windowDimention';

export const CommonStyles = StyleSheet.create({
  lastListContainer: {
    backgroundColor: Color.White,
    flexDirection: 'row',
    width: getDimension.WIDTH,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  nextListContainer: {
    backgroundColor: Color.White,
    flexDirection: 'row',
    width: getDimension.WIDTH,
    height: 115,
  },
});

export const TouchSwipeStyle = StyleSheet.create({
  deleteBottonContainer: {
    backgroundColor: Color.Selected,
    justifyContent: 'center',
    width: getDimension.WIDTH * 0.25,
  },

  deleteBox: {
    alignItems: 'center',
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
    width: getDimension.WIDTH * 0.4,
    height: 115,
  },
});

export const nextLectureContentsStyle = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    justifyContent: 'center',
    paddingLeft: 12.5,
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
    backgroundColor: Color.White,
    justifyContent: 'center',
    paddingLeft: 13,
    width: getDimension.WIDTH * 0.59,
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
  moveWriteBtn: {
    position: 'absolute',
    top: 10,
    right: 12.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Color.underLine,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '500',
    color: Color.BlackText,
  },
});
