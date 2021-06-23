import { StyleSheet } from 'react-native';
import * as Color from '@/src/config/colors';

export const commonTitle = StyleSheet.create({
  container: {
    height: 57,
    backgroundColor: Color.White,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  titleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    color: '#202020',
    fontSize: 14,
  },
});
