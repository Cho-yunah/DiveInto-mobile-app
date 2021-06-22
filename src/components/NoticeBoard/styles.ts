import { StyleSheet } from 'react-native';
import * as Color from '../../config/colors';

export const NoticeListItem = StyleSheet.create({
  container: {
    flex: 1,
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
