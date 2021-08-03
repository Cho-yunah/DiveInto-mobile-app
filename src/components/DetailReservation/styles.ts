import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@config/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

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
export const ReserveInfoStyles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: WIDTH * 0.25,
    height: HEIGHT * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E1',
    borderRadius: 7.5,
  },
  itemTitle: {
    fontWeight: '500',
    paddingTop: 7.5,
  },
});

export const ReserveUserOrCostStyles = StyleSheet.create({
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
  itemName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6A6D70',
    width: WIDTH * 0.25,
  },
  itemDesc: {
    fontSize: 15,
    color: Color.BlackText,
  },
});

export const CancelBtnStyles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: Color.underLine,
    paddingTop: 25,
    marginBottom: 40,
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
    width: WIDTH - 50,
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
