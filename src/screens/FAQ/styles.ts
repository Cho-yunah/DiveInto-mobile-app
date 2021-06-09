import { StyleSheet } from 'react-native';
import * as Color from '../../config/colors';

export const TabBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 41,
  },
  tabWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    height: 41,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: Color.PointBlue,
  },
  tabText: {
    color: Color.DarkgrayText,
    fontSize: 14,
  },
  activeTabText: {
    color: Color.PointBlue,
    fontWeight: '800',
  },
});
