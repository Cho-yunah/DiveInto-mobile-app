import { StyleSheet } from 'react-native';
import * as Color from '../../config/colors';

export const NoticeListItem = StyleSheet.create({
  container: {
    flex: 1,
    borderStartColor: Color.White,
    backgroundColor: Color.White,
    borderBottomWidth: 1,
    borderBottomColor: '#CCD7DF',
    padding: 20,
  },
  dateText: {
    fontSize: 12,
    color: Color.DarkgrayText,
    paddingTop: 1.5,
  },
  titleText: {
    fontSize: 14,
    color: '#202020',
    paddingBottom: 1.5,
  },
});

export const FAQListItem = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCD7DF',
    padding: 20,
    backgroundColor: Color.White,
  },
  text: {
    fontSize: 14,
    color: '#202020',
  },
});

export const CommonPolicySlideStyle = StyleSheet.create({
  container: {},
  buttonStyle: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#A9BBC9',
  },
  titleTextStyle: {
    color: Color.BasicText,
    fontWeight: '600',
  },
  dateTextStyle: {
    color: Color.DarkgrayText,
    fontSize: 12,
    lineHeight: 21,
  },
  ruleContainer: {
    paddingVertical: 20,
    // borderBottomWidth: 1,
    // paddingHorizontal: 10,
    // backgroundColor: '#F3F5F7',
  },
  ruleTitleStyle: {
    paddingBottom: 15,
  },
  ruleSubTitleStyle: {
    fontSize: 16,
    color: Color.BasicText,
    lineHeight: 28,
  },
  ruleDescStyle: {
    fontSize: 14,
    color: Color.BasicText,
    lineHeight: 25,
  },
});
