import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@config/colors';
import * as getDimension from '@config/windowDimention';

export const RserveHeaderStyles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: Color.BlackText,
    paddingBottom: 12.5,
  },
  dateInfoContainer: {
    flexDirection: 'row',
    backgroundColor: Color.deepBlue,
    paddingVertical: 15,
    paddingHorizontal: 12.5,
    borderRadius: 7.5,
  },
  dateInfo: {
    color: Color.White,
    fontWeight: '500',
    paddingLeft: 10,
  },
});

export const ReserveLocationInfoStyles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  infonTitle: {
    fontSize: 17.5,
    fontWeight: '600',
    color: Color.BlackText,
    paddingBottom: 10,
  },
  addressContainer: {
    backgroundColor: 'rgb(239, 198, 198)',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
  },
  addressText: {
    color: Color.White,
  },
  mapContainer: {
    width: getDimension.WIDTH - 50,
    height: 180,
  },
});

export const ReserveScheduleStyles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  title: {
    fontSize: 17.5,
    fontWeight: '600',
    color: Color.BlackText,
    paddingBottom: 10,
  },

  outerContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F3F5F7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 7.5,
    backgroundColor: '#F3F5F7',
  },
  innerContainer: {
    paddingRight: 10,
  },
  ceterRountTextContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#A9BBC9',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  roundText: {
    fontSize: 12,
    fontWeight: '600',
    color: Color.White,
  },
  scheduleTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6A6D70',
    lineHeight: 15,
  },
  dateOrTimeText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#6A6D70',
  },
});

export const ReserveCommonStyles = StyleSheet.create({
  // RserveUser Style
  outerContainer: {
    paddingTop: 25,
    borderTopWidth: 1,
    borderColor: Color.underLine,
  },
  title: {
    fontSize: 17.5,
    fontWeight: '600',
    color: Color.BlackText,
  },
  ineerContainer: {
    paddingTop: 20,
  },

  // EachCommonInfo Style
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  costLayout: {
    justifyContent: 'space-between',
  },
  equipmentLayout: {
    justifyContent: 'space-between',
  },
  DescTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6A6D70',
  },
  itemSize: {
    fontSize: 15,
    color: Color.BlackText,
  },
  itemDesc: {
    fontSize: 15,
    color: Color.BlackText,
  },
  borderline: {
    width: 1,
    height: '100%',
    backgroundColor: Color.DarkgrayText,
    marginHorizontal: 10,
  },

  emphasis: {
    color: Color.Selected,
    fontWeight: '600',
  },
});

export const CancelBtnStyles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: Color.underLine,
    paddingTop: 25,
    marginBottom: 80,
  },
  title: {
    fontSize: 17.5,
    fontWeight: '600',
    color: Color.BlackText,
  },
  cancelNotice: {
    color: Color.Selected,
    paddingTop: 5,
  },
  btnContainer: {
    width: getDimension.WIDTH - 50,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#fce6e6',
    borderRadius: 7.5,
  },
  btnText: {
    fontSize: 17.5,
    fontWeight: '500',
    color: Color.Selected,
  },
});
